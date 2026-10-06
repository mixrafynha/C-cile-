import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { images } from "../data.js";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.2 4 9.5 8.5 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.8l-6.5 5C9.4 39.6 16.1 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C36.9 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main id="accueil">
      <Hero
        eyebrow="Nettoyage premium à Lunel, Vendargues et Mauguio"
        title="Nettoyage à Lunel."
        text="Maison, bureaux et locations à Lunel 34400, Vendargues et Mauguio. Devis clair, réponse rapide."
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

      <section className="stats-band reviews-band reveal" aria-label="Avis clients">
        <div className="reviews-intro">
          <h2>Ils nous font confiance.</h2>
          <p>Avis clients prêts pour votre fiche Google.</p>
        </div>
        <div className="reviews-carousel">
          <article>
            <div className="review-meta">
              <img src="https://i.pravatar.cc/96?img=47" alt="Avatar de cliente" loading="lazy" decoding="async" />
              <div>
                <b>Claire M.</b>
                <span>★★★★★</span>
              </div>
              <i aria-label="Google"><GoogleIcon /></i>
            </div>
            <strong>Maison impeccable</strong>
            <p>Intervention soignée, ponctuelle et très professionnelle. Tout était propre, clair et prêt à vivre.</p>
          </article>
          <article>
            <div className="review-meta">
              <img src="https://i.pravatar.cc/96?img=12" alt="Avatar de client" loading="lazy" decoding="async" />
              <div>
                <b>Marc D.</b>
                <span>★★★★★</span>
              </div>
              <i aria-label="Google"><GoogleIcon /></i>
            </div>
            <strong>Bureaux toujours nets</strong>
            <p>Service régulier, discret et efficace. Les espaces de travail restent propres sans perturber l'activité.</p>
          </article>
          <article>
            <div className="review-meta">
              <img src="https://i.pravatar.cc/96?img=32" alt="Avatar de cliente" loading="lazy" decoding="async" />
              <div>
                <b>Sophie R.</b>
                <span>★★★★★</span>
              </div>
              <i aria-label="Google"><GoogleIcon /></i>
            </div>
            <strong>Location prête à accueillir</strong>
            <p>Nettoyage précis entre deux séjours, avec une vraie attention aux détails visibles par les voyageurs.</p>
          </article>
          <article>
            <div className="review-meta">
              <img src="https://i.pravatar.cc/96?img=5" alt="Avatar de cliente" loading="lazy" decoding="async" />
              <div>
                <b>Nadia B.</b>
                <span>★★★★★</span>
              </div>
              <i aria-label="Google"><GoogleIcon /></i>
            </div>
            <strong>Très bonne communication</strong>
            <p>Réponse rapide, devis clair et intervention conforme à ce qui avait été annoncé dès le départ.</p>
          </article>
          <article>
            <div className="review-meta">
              <img src="https://i.pravatar.cc/96?img=68" alt="Avatar de client" loading="lazy" decoding="async" />
              <div>
                <b>Julien P.</b>
                <span>★★★★★</span>
              </div>
              <i aria-label="Google"><GoogleIcon /></i>
            </div>
            <strong>Grand nettoyage réussi</strong>
            <p>Appartement remis au propre avec soin, surtout dans la cuisine, les sols et les détails visibles.</p>
          </article>
          <article>
            <div className="review-meta">
              <img src="https://i.pravatar.cc/96?img=25" alt="Avatar de cliente" loading="lazy" decoding="async" />
              <div>
                <b>Emma L.</b>
                <span>★★★★★</span>
              </div>
              <i aria-label="Google"><GoogleIcon /></i>
            </div>
            <strong>Service sérieux et flexible</strong>
            <p>Créneau adapté à notre besoin et résultat très propre. Une prestation rassurante et facile à organiser.</p>
          </article>
        </div>
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
            <img src={images.heroDesktop} alt="Intérieur lumineux près de Lunel" width="1600" height="900" loading="lazy" decoding="async" />
            <span>Secteurs</span>
            <strong>Lunel, Vendargues & Mauguio</strong>
          </Link>
        </div>
        <div className="hub-cta reveal">
          <div>
            <span>Projet ou nettoyage ponctuel</span>
            <strong>Besoin d'un devis clair pour votre prochaine intervention ?</strong>
          </div>
          <Link className="button primary" to="/contact">Demander un devis</Link>
        </div>
      </section>
    </main>
  );
}
