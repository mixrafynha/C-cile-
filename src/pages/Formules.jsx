import Hero from "../components/Hero.jsx";
import PackageCard from "../components/PackageCard.jsx";
import { images, packages } from "../data.js";

export default function Formules() {
  return (
    <main>
      <Hero
        page
        eyebrow="Formules"
        title="Une offre simple, comme un catalogue de services."
        text="Trois niveaux pour comprendre vite, demander vite et réserver sans confusion."
        image={images.heroDesktop}
      />
      <section className="section package-grid page-package-grid">
        {packages.map((pack) => (
          <PackageCard key={pack.label} pack={pack} />
        ))}
      </section>
    </main>
  );
}
