import { Link } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { images, faqGroups } from "../data.js";

export default function FAQ() {
  return (
    <main>
      <Hero page eyebrow="Questions fréquentes" title="On vous répond, simplement." text="Prestations, organisation, devis et secteurs : l'essentiel avant votre intervention." image={images.ecoImage} />
      <section className="section faq-section">
        <div className="faq-lead reveal">
          <div>
            <p className="eyebrow">FAQ Cécile Nettoyage</p>
            <h2>Tout ce qu'il faut savoir avant de nous confier votre espace.</h2>
          </div>
          <p>Des réponses claires pour choisir la bonne prestation et préparer votre passage sans mauvaise surprise.</p>
        </div>
        <nav className="faq-jump reveal" aria-label="Catégories de la FAQ">
          {faqGroups.map((group, index) => <a href={`#faq-${index}`} key={group.title}>{group.title}</a>)}
        </nav>
        <div className="faq-groups">
          {faqGroups.map((group, index) => (
            <section className="faq-group reveal" id={`faq-${index}`} key={group.title}>
              <header><span>0{index + 1}</span><div><h3>{group.title}</h3><p>{group.intro}</p></div></header>
              <div className="faq-list">
                {group.items.map(([question, answer]) => (
                  <details className="faq-item" key={question}>
                    <summary>{question}<span aria-hidden="true">+</span></summary>
                    <p>{answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
        <aside className="faq-contact reveal">
          <div><p className="eyebrow">Une question spécifique ?</p><h2>Parlez-nous de votre besoin.</h2><p>Ville, type de lieu, fréquence et disponibilités : quelques détails suffisent pour commencer.</p></div>
          <Link className="button button-primary" to="/contact">Demander un devis</Link>
        </aside>
      </section>
    </main>
  );
}

export const faqs = faqGroups.flatMap((group) => group.items);
