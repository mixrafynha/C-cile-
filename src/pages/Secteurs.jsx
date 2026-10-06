import Hero from "../components/Hero.jsx";
import { areas, images } from "../data.js";

export default function Secteurs() {
  return (
    <main>
      <Hero
        page
        eyebrow="Secteurs"
        title="Lunel, Vendargues, Mauguio."
        text="Une zone claire pour organiser vite votre nettoyage local."
        image={images.heroDesktop}
      />
      <section className="section areas page-areas">
        <div className="section-heading reveal">
          <p className="eyebrow">Zone d’intervention</p>
          <h2>Des passages organisés autour de Lunel.</h2>
          <p>Cécile intervient selon disponibilité à Lunel, Vendargues, Mauguio et dans les communes proches.</p>
        </div>
        <div className="area-list reveal">
          {areas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </section>
    </main>
  );
}
