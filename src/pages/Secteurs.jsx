import Hero from "../components/Hero.jsx";
import { areas, images } from "../data.js";

export default function Secteurs() {
  return (
    <main>
      <Hero
        page
        eyebrow="Secteurs"
        title="Montpellier et alentours proches."
        text="Une zone claire pour rassurer vite les clients locaux."
        image={images.heroDesktop}
      />
      <section className="section areas page-areas">
        <div className="section-heading reveal">
          <p className="eyebrow">Zone d’intervention</p>
          <h2>Des passages organisés autour de Montpellier.</h2>
          <p>Cécile intervient selon disponibilité dans les quartiers centraux et les communes proches.</p>
        </div>
        <div className="area-list reveal">
          {areas.map((area) => <span key={area}>{area}</span>)}
        </div>
      </section>
    </main>
  );
}
