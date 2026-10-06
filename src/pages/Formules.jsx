import Hero from "../components/Hero.jsx";
import PackageCard from "../components/PackageCard.jsx";
import { images, packages } from "../data.js";

export default function Formules() {
  return (
    <main>
      <Hero
        page
        eyebrow="Formules"
        title="Formules simples."
        text="Des niveaux clairs pour nettoyer maison, bureau ou location autour de Lunel."
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
