import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { images } from "../data.js";

export default function Home() {
  return (
    <main id="accueil">
      <Hero
        eyebrow="Nettoyage premium à Lunel 34400"
        title="Un nettoyage impeccable à Lunel, sans stress."
        text="Maisons, bureaux et locations saisonnières : un service soigné à Lunel et dans un rayon d'environ 100 km, avec un devis clair et une réponse rapide."
        image={images.heroDesktop}
        mobileImage={images.heroMobile}
      >
        <div className="hero-actions">
          <Link className="button primary" to="/contact">Demander un devis</Link>
          <Link className="button ghost" to="/formules">Voir les formules</Link>
        </div>
        <div className="trust-row" aria-label="Garanties du service">
          <span>Devis gratuit</span>
          <span>Intervention flexible</span>
          <span>Produits sur demande</span>
        </div>
      </Hero>

      <section className="stats-band reveal" aria-label="Points forts de Cécile Nettoyage">
        <div><strong>24h</strong><span>réponse rapide</span></div>
        <div><strong>7j/7</strong><span>selon disponibilité</span></div>
        <div><strong>100%</strong><span>devis clair</span></div>
      </section>

      <section className="section home-hub">
        <div className="section-heading reveal">
          <p className="eyebrow">Explorer</p>
          <h2>Un parcours clair, page par page.</h2>
          <p>Comme une boutique de services: le client choisit une prestation, compare les formules, vérifie la zone puis demande son devis.</p>
        </div>
        <div className="hub-grid">
          <Link className="hub-card reveal" to="/services">
            <img src={images.officeImage} alt="Bureau propre" width="720" height="720" loading="lazy" decoding="async" />
            <span>Services</span>
            <strong>Voir les prestations</strong>
          </Link>
          <Link className="hub-card reveal hub-card-dark" to="/formules">
            <span>Formules</span>
            <strong>Comparer les niveaux</strong>
          </Link>
          <Link className="hub-card reveal" to="/catalogue">
            <img src={images.airbnbImage} alt="Cuisine prête pour location" width="720" height="720" loading="lazy" decoding="async" />
            <span>Catalogue</span>
            <strong>Choisir le type de nettoyage</strong>
          </Link>
          <Link className="hub-card reveal" to="/secteurs">
            <img src={images.heroDesktop} alt="Intérieur lumineux à Montpellier" width="1600" height="900" loading="lazy" decoding="async" />
            <span>Secteurs</span>
            <strong>Lunel & alentours</strong>
          </Link>
          <Link className="hub-card reveal hub-card-accent" to="/contact">
            <span>Projet sur mesure</span>
            <strong>Parlons de votre prochain nettoyage</strong>
            <em>Réponse rapide · Devis gratuit</em>
          </Link>
        </div>
      </section>
    </main>
  );
}
