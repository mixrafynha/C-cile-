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
        subject: `Nouvelle demande Cécile Nettoyage — ${service || 'Contact'}`,
        html: `
          <h2>Nouvelle demande depuis cecileclean.com</h2>
          <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
          <p><strong>E-mail :</strong> ${escapeHtml(email)}</p>
          <p><strong>Téléphone :</strong> ${escapeHtml(phone || 'Non renseigné')}</p>
          <p><strong>Service :</strong> ${escapeHtml(service || 'Non renseigné')}</p>
          <p><strong>Message :</strong></p>
          <p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>
        `,
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
