import Hero from "../components/Hero.jsx";
import { images } from "../data.js";

export default function Catalogue() {
  return (
    <main>
      <Hero
        page
        eyebrow="Catalogue"
        title="Les types de nettoyage, présentés clairement."
        text="Un catalogue visuel pour que chaque client se reconnaisse rapidement."
        image={images.ecoImage}
      />
      <section className="section cleaning-types">
        <div className="type-grid">
          <article className="type-card reveal visible">
            <img src={images.ecoImage} alt="Salle de bain propre" width="1000" height="1250" loading="lazy" decoding="async" />
            <div><span>Maison</span><h3>Nettoyage complet</h3><p>Sols, poussières, cuisine, salle de bain et finitions visibles.</p></div>
          </article>
          <article className="type-card reveal visible">
            <img src={images.officeImage} alt="Bureau propre" width="720" height="720" loading="lazy" decoding="async" />
            <div><span>Professionnel</span><h3>Bureaux & commerces</h3><p>Postes de travail, accueil, sanitaires, sols et zones de passage.</p></div>
          </article>
          <article className="type-card reveal visible">
            <img src={images.airbnbImage} alt="Cuisine prête pour location" width="720" height="720" loading="lazy" decoding="async" />
            <div><span>Location</span><h3>Airbnb & courte durée</h3><p>Remise au propre entre voyageurs, linge, surfaces et détails.</p></div>
          </article>
          <article className="type-card reveal visible type-card-dark">
            <div><span>Intensif</span><h3>Vitres, déménagement, après travaux</h3><p>Pour les moments où il faut remettre un lieu vraiment net.</p></div>
            <ul><li>Vitres et traces visibles</li><li>Fin de chantier légère</li><li>Entrée ou sortie de logement</li></ul>
          </article>
        </div>
      </section>
    </main>
  );
}
