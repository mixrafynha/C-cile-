import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { cityPages, images } from "../data.js";

export default function Secteurs() {
  return (
    <main>
      <Hero page eyebrow="Secteurs" title="Lunel, Vendargues, Mauguio." text="Une zone claire pour organiser vite votre nettoyage local." image={images.heroDesktop} />
      <section className="section areas page-areas">
        <div className="section-heading reveal">
          <p className="eyebrow">Zone d’intervention</p>
          <h2>Des passages organisés autour de Lunel.</h2>
          <p>Découvrez les prestations disponibles dans chaque ville. Les interventions sont confirmées selon la prestation, le secteur et les disponibilités.</p>
        </div>
        <div className="area-list reveal">
          {cityPages.map((city) => <Link key={city.slug} to={`/nettoyage/${city.slug}`}>{city.name}<span aria-hidden="true">→</span></Link>)}
        </div>
      </section>
    </main>
  );
}
