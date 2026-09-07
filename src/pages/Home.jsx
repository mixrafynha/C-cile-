import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { images } from "../data.js";

export default function Home() {
  return (
    <main id="accueil">
      <Hero
        eyebrow="Service premium à Montpellier"
        title="Un intérieur impeccable, sans stress."
        text="Nettoyage premium pour maisons, bureaux et locations courte durée. Une présentation claire, des finitions propres et une demande de devis sans friction."
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

      <section className="stats-band reveal visible" aria-label="Points forts de Cécile Nettoyage">
        <div><strong>24h</strong><span>réponse rapide</span></div>
        <div><strong>7j/7</strong><span>selon disponibilité</span></div>
        <div><strong>100%</strong><span>devis clair</span></div>
      </section>

      <section className="section home-hub">
        <div className="section-heading reveal visible">
          <p className="eyebrow">Explorer</p>
          <h2>Un parcours clair, page par page.</h2>
          <p>Comme une boutique de services: le client choisit une prestation, compare les formules, vérifie la zone puis demande son devis.</p>
        </div>
        <div className="hub-grid">
          <Link className="hub-card reveal visible" to="/services">
            <img src={images.officeImage} alt="Bureau propre" width="720" height="720" loading="lazy" decoding="async" />
            <span>Services</span>
            <strong>Voir les prestations</strong>
          </Link>
          <Link className="hub-card reveal visible hub-card-dark" to="/formules">
            <span>Formules</span>
            <strong>Comparer les niveaux</strong>
          </Link>
          <Link className="hub-card reveal visible" to="/catalogue">
            <img src={images.airbnbImage} alt="Cuisine prête pour location" width="720" height="720" loading="lazy" decoding="async" />
            <span>Catalogue</span>
            <strong>Choisir le type de nettoyage</strong>
          </Link>
          <Link className="hub-card reveal visible" to="/secteurs">
            <span>Secteurs</span>
            <strong>Voir les zones</strong>
          </Link>
          <Link className="hub-card reveal visible hub-card-accent" to="/contact">
            <span>Contact</span>
            <strong>Demander un devis</strong>
          </Link>
        </div>
      </section>
    </main>
  );
}
