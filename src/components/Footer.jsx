import { Link } from "react-router-dom";
import logo from "../assets/cecile-logo.webp";

const footerLinks = [
  ["/services", "Services"],
  ["/formules", "Formules"],
  ["/catalogue", "Catalogue"],
  ["/secteurs", "Secteurs"],
  ["/contact", "Contact"]
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="footer-logo" to="/" aria-label="Cécile Nettoyage accueil">
            <img className="footer-brand-logo" src={logo} alt="Cécile Nettoyage" />
            <span>
              <strong>Nettoyage à Lunel</strong>
              <small>Lunel 34400 & alentours</small>
            </span>
          </Link>
          <h2>Un intérieur impeccable, sans stress.</h2>
          <p>Des prestations de nettoyage claires, soignées et adaptées à votre quotidien.</p>
        </div>

        <nav className="footer-nav" aria-label="Navigation secondaire">
          <span className="footer-label">Découvrir</span>
          {footerLinks.map(([to, label]) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
        </nav>

        <div className="footer-contact">
          <span className="footer-label">Parlons de votre besoin</span>
          <p>Maison, bureaux ou location saisonnière : demandez un devis gratuit.</p>
          <Link className="footer-cta" to="/contact">Demander un devis <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Cécile Nettoyage · Tous droits réservés</span>
        <span>Particuliers · Professionnels · Locations</span>
        <div className="footer-legal-links">
          <Link to="/mentions-legales">Mentions légales</Link>
          <Link to="/politique-confidentialite">Confidentialité</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
        <span className="footer-credit">
          Site created by <a href="https://rafynhadev.online" target="_blank" rel="noreferrer">rafynha</a>
        </span>
      </div>
    </footer>
  );
}
