import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { images, services } from "../data.js";

export default function Services() {
  return (
    <main>
      <Hero
        page
        eyebrow="Services"
        title="Des prestations propres, lisibles, faciles à choisir."
        text="Une offre structurée pour maisons, bureaux, commerces et locations courte durée."
        image={images.officeImage}
      />
      <section className="section service-grid service-grid-large">
        {services.map(([number, title, text, detail]) => (
          <ServiceCard key={number} number={number} title={title} text={text} detail={detail} />
        ))}
      </section>
    </main>
  );
}
