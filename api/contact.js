const WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS = 3;
const buckets = globalThis.__cecileContactRateLimit || new Map();
globalThis.__cecileContactRateLimit = buckets;

function clientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  return (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(',')[0])?.trim()
    || req.headers['x-real-ip']
    || req.socket?.remoteAddress
    || 'unknown';
}

function rateLimit(ip) {
  const now = Date.now();
  const current = buckets.get(ip);
  if (!current || now >= current.resetAt) {
    const next = { count: 1, resetAt: now + WINDOW_MS };
    buckets.set(ip, next);
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetAt: next.resetAt };
  }
  if (current.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetAt: current.resetAt };
  }
  current.count += 1;
  return { allowed: true, remaining: MAX_REQUESTS - current.count, resetAt: current.resetAt };
}

function clean(value, max = 1000) {
  return String(value ?? '').trim().slice(0, max);
}

function escapeHtml(value) {
  return clean(value, 4000)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Méthode non autorisée.' });
  }

  const limit = rateLimit(clientIp(req));
  res.setHeader('X-RateLimit-Limit', String(MAX_REQUESTS));
  res.setHeader('X-RateLimit-Remaining', String(limit.remaining));
  res.setHeader('X-RateLimit-Reset', String(Math.ceil(limit.resetAt / 1000)));
  if (!limit.allowed) {
    res.setHeader('Retry-After', String(Math.ceil((limit.resetAt - Date.now()) / 1000)));
    return res.status(429).json({ ok: false, error: 'Trop de demandes. Réessayez dans 15 minutes.' });
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  const name = clean(body.name, 100);
  const email = clean(body.email, 200).toLowerCase();
  const phone = clean(body.phone, 50);
  const service = clean(body.service, 120);
  const message = clean(body.message, 3000);
  const website = clean(body.website, 200); // honeypot

  if (website) return res.status(200).json({ ok: true });
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Nom, e-mail et message sont obligatoires.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Adresse e-mail invalide.' });
  }
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_EMAIL || !process.env.FROM_EMAIL) {
    console.error('Missing RESEND_API_KEY, CONTACT_EMAIL or FROM_EMAIL');
    return res.status(500).json({ ok: false, error: 'Configuration e-mail incomplète.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL,
        to: [process.env.CONTACT_EMAIL],
        reply_to: email,
        subject: `Nouvelle demande — ${service || 'Contact'} — ${name}`,
        text: `Nouvelle demande de devis Cécile Nettoyage\n\nNom : ${name}\nE-mail : ${email}\nTéléphone : ${phone || 'Non renseigné'}\nService : ${service || 'Non renseigné'}\n\nMessage :\n${message}\n\nReçue depuis https://www.cecileclean.com`,
        html: `
<!doctype html>
<html lang="fr">
  <body style="margin:0;padding:0;background:#f4f1ea;font-family:Arial,Helvetica,sans-serif;color:#17221c;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f1ea;padding:28px 12px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e5e0d6;">
          <tr>
            <td style="background:#183c2d;padding:30px 34px;color:#ffffff;">
              <div style="font-size:12px;letter-spacing:2.2px;text-transform:uppercase;opacity:.78;margin-bottom:9px;">Cécile Nettoyage</div>
              <div style="font-size:27px;line-height:1.2;font-weight:700;">Nouvelle demande de devis</div>
              <div style="margin-top:15px;display:inline-block;background:#f1df9b;color:#183c2d;border-radius:999px;padding:8px 13px;font-size:13px;font-weight:700;">${escapeHtml(service || 'Demande de contact')}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:30px 34px 8px;">
              <div style="font-size:13px;color:#6f786f;margin-bottom:18px;">Un nouveau client vient de vous contacter depuis <strong>cecileclean.com</strong>.</div>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:separate;border-spacing:0;background:#faf9f6;border:1px solid #ebe7df;border-radius:14px;overflow:hidden;">
                <tr><td style="padding:14px 16px;border-bottom:1px solid #ebe7df;color:#778078;font-size:12px;width:105px;">NOM</td><td style="padding:14px 16px;border-bottom:1px solid #ebe7df;font-weight:700;">${escapeHtml(name)}</td></tr>
                <tr><td style="padding:14px 16px;border-bottom:1px solid #ebe7df;color:#778078;font-size:12px;">E-MAIL</td><td style="padding:14px 16px;border-bottom:1px solid #ebe7df;"><a href="mailto:${escapeHtml(email)}" style="color:#183c2d;font-weight:700;text-decoration:none;">${escapeHtml(email)}</a></td></tr>
                <tr><td style="padding:14px 16px;border-bottom:1px solid #ebe7df;color:#778078;font-size:12px;">TÉLÉPHONE</td><td style="padding:14px 16px;border-bottom:1px solid #ebe7df;">${phone ? `<a href="tel:${escapeHtml(phone)}" style="color:#183c2d;font-weight:700;text-decoration:none;">${escapeHtml(phone)}</a>` : 'Non renseigné'}</td></tr>
                <tr><td style="padding:14px 16px;color:#778078;font-size:12px;">SERVICE</td><td style="padding:14px 16px;font-weight:700;">${escapeHtml(service || 'Non renseigné')}</td></tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:20px 34px 8px;">
              <div style="font-size:12px;letter-spacing:1.4px;color:#778078;font-weight:700;margin-bottom:9px;">MESSAGE</div>
              <div style="background:#f7f4ed;border-left:4px solid #c8a95b;border-radius:10px;padding:18px 20px;font-size:15px;line-height:1.65;">${escapeHtml(message).replaceAll('\n', '<br>')}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 34px 32px;">
              <table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr>
                <td style="padding-right:10px;padding-bottom:8px;"><a href="mailto:${escapeHtml(email)}" style="display:inline-block;background:#183c2d;color:#ffffff;text-decoration:none;font-weight:700;border-radius:10px;padding:13px 18px;">Répondre au client</a></td>
                ${phone ? `<td style="padding-bottom:8px;"><a href="tel:${escapeHtml(phone)}" style="display:inline-block;background:#f1df9b;color:#183c2d;text-decoration:none;font-weight:700;border-radius:10px;padding:13px 18px;">Appeler le client</a></td>` : ''}
              </tr></table>
              <div style="margin-top:18px;font-size:12px;line-height:1.5;color:#8a918b;">Vous pouvez aussi utiliser directement « Répondre » dans votre messagerie : la réponse sera adressée à ${escapeHtml(email)}.</div>
            </td>
          </tr>
          <tr><td style="background:#f7f5ef;padding:18px 34px;text-align:center;font-size:11px;color:#8a918b;">Cécile Nettoyage · <a href="https://www.cecileclean.com" style="color:#183c2d;text-decoration:none;">cecileclean.com</a></td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      console.error('Resend error:', response.status, data);
      return res.status(502).json({ ok: false, error: "L'envoi a échoué. Réessayez plus tard." });
    }
    return res.status(200).json({ ok: true, id: data.id });
  } catch (error) {
    console.error('Contact API error:', error);
    return res.status(500).json({ ok: false, error: "L'envoi a échoué. Réessayez plus tard." });
  }
}
