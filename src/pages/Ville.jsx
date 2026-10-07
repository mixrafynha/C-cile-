import { Link, Navigate, useParams } from "react-router-dom";
import Hero from "../components/Hero.jsx";
import { images, cityPages } from "../data.js";

const services = [
  ["01", "Ménage à domicile", "Entretien régulier ou ponctuel des sols, poussières, cuisine, salle de bain et surfaces du quotidien."],
  ["02", "Bureaux & commerces", "Des passages organisés autour de votre activité pour les espaces de travail, sanitaires et zones de passage."],
  ["03", "Locations saisonnières", "Une remise au propre attentive entre deux séjours pour offrir un espace accueillant aux prochains voyageurs."],
  ["04", "Grand nettoyage", "Une intervention plus complète avant un emménagement, après une période chargée ou pour repartir sur une base nette."],
];

export default function Ville() {
  const { slug } = useParams();
  const city = cityPages.find((item) => item.slug === slug);
  if (!city) return <Navigate to="/secteurs" replace />;
  const cityImage = { eco: images.ecoImage, office: images.officeImage, airbnb: images.airbnbImage, hero: images.heroDesktop }[city.image] || images.heroDesktop;
  const localFaqs = [
    [`Quels services de nettoyage proposez-vous à ${city.name} ?`, `À ${city.name}, vous pouvez demander du ménage à domicile, du nettoyage de bureaux ou commerces, une remise au propre de location saisonnière ou un grand nettoyage, selon les disponibilités.`],
    [`Peut-on réserver un nettoyage ponctuel à ${city.name} ?`, "Oui. Une intervention ponctuelle peut être organisée pour un besoin précis, une remise en état ou un grand nettoyage. Vous pouvez aussi demander un entretien régulier."],
    [`Comment demander un devis à ${city.name} ?`, `Indiquez simplement votre adresse ou secteur à ${city.name}, le type de lieu, sa surface approximative, la prestation souhaitée et vos disponibilités via notre formulaire de contact.`],
    [`Intervenez-vous pour le nettoyage de bureaux à ${city.name} ?`, `Oui. Cécile Nettoyage peut assurer l’entretien de bureaux et espaces professionnels à ${city.name}, avec un contenu et une fréquence définis selon l’activité et les disponibilités.`],
    [`Proposez-vous le ménage à domicile à ${city.name} ?`, `Oui. Les particuliers à ${city.name} peuvent demander un entretien régulier, un nettoyage ponctuel ou un grand nettoyage de maison ou d’appartement.`],
  ];

  return (
    <main>
      <Hero page eyebrow={`Cécile Nettoyage • ${city.name}`} title={`Entreprise de nettoyage à ${city.name}.`} text={city.tagline} image={cityImage} />
      <section className="section city-intro city-layout">
        <div className="city-story reveal">
          <p className="eyebrow">Service local</p>
          <h2>Un nettoyage pensé pour votre quotidien à {city.name}.</h2>
          <p className="city-intro-text">{city.intro}</p>
          <p>Vous recherchez une <strong>{city.keyword}</strong> ? Cécile Nettoyage prend en charge le ménage à domicile, le nettoyage de bureaux et commerces, les locations saisonnières, les vitres accessibles et les remises en état. Chaque prestation est définie selon votre espace, votre fréquence et vos priorités.</p>
          <p>{city.local}</p>
          <div className="city-proof"><span>✓</span><strong>{city.highlight}</strong></div>
        </div>
        <div className="city-visual reveal"><img src={cityImage} alt={`Service de nettoyage à ${city.name}`} /><div><small>Zone d'intervention</small><strong>{city.name} & alentours</strong></div></div>
      </section>

      <section className="city-services-wrap">
        <div className="section">
          <div className="section-heading reveal"><p className="eyebrow">Nos prestations</p><h2>Le bon niveau de nettoyage, au bon moment.</h2><p>Choisissez le besoin qui correspond à votre espace. Le contenu exact est défini avec vous avant l'intervention.</p></div>
          <div className="city-service-grid reveal">{services.map(([n,t,d]) => <article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><Link to="/contact">Demander un devis <b>→</b></Link></article>)}</div>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading"><p className="eyebrow">Nettoyage professionnel à {city.name}</p><h2>Une solution pour les particuliers comme pour les professionnels.</h2><p>Maison, appartement, bureau, commerce ou location saisonnière : nous adaptons l’intervention à l’usage du lieu. Pour une entreprise, le passage peut cibler les sols, sanitaires, surfaces de contact, espaces d’accueil et zones de circulation. Pour un logement, les priorités sont définies avec vous avant l’intervention.</p></div>
        <div className="city-service-grid reveal"><article><span>01</span><h3>Nettoyage de bureaux à {city.name}</h3><p>Entretien des espaces de travail et zones communes avec une fréquence adaptée à votre activité.</p><Link to="/contact">Obtenir un devis <b>→</b></Link></article><article><span>02</span><h3>Ménage à domicile à {city.name}</h3><p>Entretien courant ou ponctuel de votre maison ou appartement, selon les tâches prioritaires.</p><Link to="/contact">Obtenir un devis <b>→</b></Link></article><article><span>03</span><h3>Vitres & remise en état</h3><p>Nettoyage des vitrages accessibles et grand nettoyage avant ou après un changement d’occupation.</p><Link to="/contact">Obtenir un devis <b>→</b></Link></article><article><span>04</span><h3>Locations saisonnières</h3><p>Remise au propre entre deux séjours pour préparer un logement accueillant pour les prochains voyageurs.</p><Link to="/contact">Obtenir un devis <b>→</b></Link></article></div>
      </section>

      <section className="section city-process reveal">
        <div className="section-heading"><p className="eyebrow">Comment ça marche</p><h2>Simple du premier message au passage.</h2></div>
        <div className="city-steps"><article><span>1</span><h3>Vous décrivez le besoin</h3><p>Lieu, surface, ville, fréquence et points prioritaires.</p></article><article><span>2</span><h3>Nous cadrons la prestation</h3><p>Nous confirmons le contenu et les possibilités selon le planning.</p></article><article><span>3</span><h3>Votre espace est pris en charge</h3><p>L'intervention suit les priorités convenues pour un résultat clair.</p></article></div>
      </section>

      <section className="section city-faq reveal">
        <div className="city-faq-head"><div><p className="eyebrow">Questions locales</p><h2>Nettoyage à {city.name} : les réponses utiles.</h2></div><Link to="/faq">Voir toute la FAQ →</Link></div>
        <div className="faq-list">{localFaqs.map(([q,a]) => <details className="faq-item" key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>
      </section>

      <section className="section city-cta reveal"><div><p className="eyebrow">Votre besoin à {city.name}</p><h2>Envie de retrouver un espace vraiment propre ?</h2><p>Décrivez-nous le lieu et la prestation souhaitée. Nous vous répondons avec une solution adaptée aux possibilités d'intervention.</p></div><Link className="button button-primary" to="/contact">Demander un devis</Link></section>
    </main>
  );
}
