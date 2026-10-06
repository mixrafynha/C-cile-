import Hero from "../components/Hero.jsx";
import ServiceCard from "../components/ServiceCard.jsx";
import { images, services } from "../data.js";

export default function Services() {
  return (
    <main>
      <Hero
        page
        eyebrow="Services"
        title="Services de nettoyage locaux."
        text="Maison, bureaux et locations à Lunel, Vendargues, Mauguio et alentours."
        image={images.officeImage}
      />
      <section className="section service-grid service-grid-large">
        {services.map(([number, title, text, detail, image]) => (
          <ServiceCard key={number} number={number} title={title} text={text} detail={detail} image={image} />
        ))}
      </section>
    </main>
  );
}
