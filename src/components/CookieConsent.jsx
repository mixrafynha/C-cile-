import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "cecile-cookie-consent-v1";
const CONSENT_DURATION = 180 * 24 * 60 * 60 * 1000;

function readConsent() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved && saved.expiresAt > Date.now() ? saved.choice : null;
  } catch {
    return null;
  }
}

export default function CookieConsent() {
  const [choice, setChoice] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => setChoice(readConsent()), []);

  const saveChoice = (nextChoice) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      choice: nextChoice,
      expiresAt: Date.now() + CONSENT_DURATION
    }));
    setChoice(nextChoice);
    setOpen(false);
  };

  if (choice && !open) {
    return (
      <button className="cookie-settings-button" type="button" onClick={() => setOpen(true)}>
        Gérer mes cookies
      </button>
    );
  }

  return (
    <aside className="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <div>
        <p className="cookie-kicker">Votre vie privée</p>
        <h2 id="cookie-title">Des cookies, avec votre accord.</h2>
        <p id="cookie-description">Nous utilisons uniquement les cookies nécessaires au fonctionnement du site. Les cookies facultatifs resteront désactivés sans votre choix.</p>
        <Link to="/cookies" className="cookie-link" onClick={() => setOpen(false)}>En savoir plus</Link>
      </div>
      <div className="cookie-actions">
        <button className="cookie-button cookie-button-secondary" type="button" onClick={() => saveChoice("refused")}>Tout refuser</button>
        <button className="cookie-button cookie-button-secondary" type="button" onClick={() => setOpen((value) => !value)}>Gérer</button>
        <button className="cookie-button cookie-button-primary" type="button" onClick={() => saveChoice("accepted")}>Tout accepter</button>
      </div>
      {open ? (
        <div className="cookie-preferences">
          <strong>Préférences</strong>
          <span>Cookies nécessaires <b>Toujours actifs</b></span>
          <span>Mesure d’audience et publicité <b>Désactivés</b></span>
          <button className="cookie-button cookie-button-primary" type="button" onClick={() => saveChoice("refused")}>Enregistrer mes choix</button>
        </div>
      ) : null}
    </aside>
  );
}
