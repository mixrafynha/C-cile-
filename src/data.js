import heroDesktop from "./assets/hero-cleaning-montpellier.webp";
import heroMobile from "./assets/hero-cleaning-montpellier-mobile.webp";
import homeHero from "./assets/hero-limpeza.webp";
import officeImage from "./assets/office-cleaning.webp";
import ecoImage from "./assets/eco-cleaning-detail.webp";
import airbnbImage from "./assets/airbnb-cleaning.webp";

export const images = {
  heroDesktop,
  heroMobile,
  homeHero,
  officeImage,
  ecoImage,
  airbnbImage
};

export const services = [
  ["01", "Ménage à domicile", "Entretien régulier, cuisine, salle de bain, sols, poussières, surfaces et détails visibles.", "Hebdomadaire ou ponctuel", ecoImage],
  ["02", "Bureaux & commerces", "Accueil, postes de travail, sanitaires, sols, vitrines intérieures et zones de passage.", "Avant ouverture ou après fermeture", officeImage],
  ["03", "Locations Airbnb", "Remise au propre entre deux voyageurs, linge, cuisine, salle de bain et contrôle final.", "Check-list entre séjours", airbnbImage],
  ["04", "Remise en état", "Déménagement, après travaux légers, logement fermé longtemps ou grand nettoyage saisonnier.", "Intervention intensive", heroDesktop],
  ["05", "Vitres & traces", "Surfaces vitrées accessibles, miroirs, traces de doigts, finitions brillantes.", "Finition premium", heroDesktop],
  ["06", "Cuisine & sanitaires", "Zones sensibles, robinetterie, plaques, évier, douche, WC et surfaces de contact.", "Hygiène renforcée", ecoImage]
];

export const packages = [
  {
    label: "Essentiel",
    title: "Entretien régulier",
    text: "Pour garder le logement propre chaque semaine avec une routine simple.",
    items: ["Sols et poussières", "Cuisine et salle de bain", "Fréquence flexible"],
    cta: "Demander"
  },
  {
    label: "Premium",
    title: "Grand nettoyage",
    text: "Intervention plus poussée avec zones sensibles, détails visibles et contrôle final.",
    items: ["Détails et finitions", "Zones difficiles", "Avant/après visible"],
    cta: "Réserver",
    featured: true
  },
  {
    label: "Pro",
    title: "Bureaux & Airbnb",
    text: "Nettoyage fiable pour accueillir clients, équipes ou voyageurs.",
    items: ["Check-list de passage", "Accueil et sanitaires", "Créneaux adaptés"],
    cta: "Planifier"
  }
];

export const areas = ["Lunel", "Vendargues", "Mauguio", "Baillargues", "Castelnau-le-Lez", "Lattes", "La Grande-Motte", "Montpellier"];


export const cityPages = [
  { slug: "lunel", name: "Lunel", keyword: "entreprise de nettoyage à Lunel", seoDescription: "Entreprise de nettoyage à Lunel pour particuliers et professionnels : ménage à domicile, bureaux, vitres, locations saisonnières et grand nettoyage. Demandez un devis.", tagline: "Un intérieur net, sans compliquer votre semaine.", intro: "À Lunel, Cécile Nettoyage accompagne les particuliers, professionnels et locations saisonnières avec des interventions pensées autour de votre rythme.", local: "Du centre de Lunel aux quartiers résidentiels et communes voisines, nous organisons les passages selon le type de lieu, sa surface et le niveau d'entretien attendu.", highlight: "Entretien régulier, ponctuel ou remise en état", image: "eco" },
  { slug: "vendargues", name: "Vendargues", keyword: "entreprise de nettoyage à Vendargues", seoDescription: "Entreprise de nettoyage à Vendargues : entretien de maisons, bureaux, commerces, vitres et nettoyage ponctuel ou régulier. Devis personnalisé.", tagline: "Un service souple pour la maison comme pour le travail.", intro: "À Vendargues, profitez d'un nettoyage clair et organisé pour votre logement, vos bureaux ou votre commerce, en ponctuel comme en régulier.", local: "Les créneaux peuvent être adaptés aux contraintes des particuliers et des professionnels afin de limiter l'impact sur votre quotidien ou votre activité.", highlight: "Maison, bureaux et commerces", image: "office" },
  { slug: "mauguio", name: "Mauguio", keyword: "entreprise de nettoyage à Mauguio", seoDescription: "Entreprise de nettoyage à Mauguio pour maisons, appartements, bureaux et locations saisonnières. Nettoyage régulier, ponctuel et remise en état.", tagline: "Une propreté soignée, du quotidien aux grands nettoyages.", intro: "À Mauguio, Cécile Nettoyage intervient pour l'entretien des maisons et appartements, les espaces professionnels et les locations saisonnières.", local: "Chaque demande est cadrée avant le passage : priorités, fréquence, accès et points d'attention. Vous savez ainsi ce qui est prévu avant l'intervention.", highlight: "Prestations adaptées à chaque espace", image: "eco" },
  { slug: "baillargues", name: "Baillargues", keyword: "entreprise de nettoyage à Baillargues", seoDescription: "Entreprise de nettoyage à Baillargues : ménage, bureaux, commerces, vitres et remise en état pour particuliers et professionnels. Demandez votre devis.", tagline: "Des prestations précises, adaptées à votre rythme.", intro: "À Baillargues, demandez un entretien courant, un nettoyage ponctuel ou une remise en état pour un logement ou un espace professionnel.", local: "Nous définissons avec vous les zones prioritaires et le niveau de prestation pour proposer une intervention cohérente avec le lieu et votre besoin réel.", highlight: "Ponctuel ou régulier, selon vos besoins", image: "office" },
  { slug: "castelnau-le-lez", name: "Castelnau-le-Lez", keyword: "entreprise de nettoyage à Castelnau-le-Lez", seoDescription: "Entreprise de nettoyage à Castelnau-le-Lez : domicile, bureaux, commerces, vitres et remise en état. Prestations ponctuelles ou régulières sur devis.", tagline: "Un nettoyage professionnel avec le souci du détail.", intro: "À Castelnau-le-Lez, Cécile Nettoyage propose des solutions pour les domiciles, bureaux et remises en état avec un contenu défini selon vos priorités.", local: "Appartement, maison ou espace de travail : la prestation peut cibler l'entretien courant comme les zones qui demandent davantage d'attention.", highlight: "Domicile, bureaux et remise en état", image: "office" },
  { slug: "lattes", name: "Lattes", keyword: "entreprise de nettoyage à Lattes", seoDescription: "Entreprise de nettoyage à Lattes : maisons, appartements, bureaux, locations saisonnières, vitres et grand nettoyage. Demandez un devis personnalisé.", tagline: "Votre espace propre, prêt à vivre ou à accueillir.", intro: "À Lattes, nous organisons l'entretien courant, les grands nettoyages, les prestations professionnelles et la remise au propre des locations saisonnières.", local: "La formule est ajustée à l'usage du lieu : confort quotidien, accueil des clients ou préparation d'un logement avant une nouvelle arrivée.", highlight: "Entretien et locations saisonnières", image: "airbnb" },
  { slug: "la-grande-motte", name: "La Grande-Motte", keyword: "entreprise de nettoyage à La Grande-Motte", seoDescription: "Entreprise de nettoyage à La Grande-Motte pour logements, résidences, locations saisonnières et professionnels. Entretien et remise au propre sur devis.", tagline: "Des logements impeccables entre deux séjours.", intro: "À La Grande-Motte, Cécile Nettoyage répond notamment aux besoins des résidences et locations saisonnières, ainsi qu'à l'entretien des logements.", local: "Pour les locations, l'intervention peut être organisée entre deux séjours avec une attention particulière portée aux pièces d'eau, à la cuisine, aux sols et aux détails visibles.", highlight: "Idéal pour résidences et locations", image: "airbnb" },
  { slug: "montpellier", name: "Montpellier", keyword: "entreprise de nettoyage à Montpellier", seoDescription: "Entreprise de nettoyage à Montpellier pour particuliers et professionnels : ménage, bureaux, commerces, locations saisonnières, vitres et remise en état.", tagline: "Une solution simple pour déléguer votre nettoyage.", intro: "À Montpellier, Cécile Nettoyage accompagne particuliers, professionnels et locations saisonnières avec des prestations adaptées au lieu et à la fréquence souhaitée.", local: "Pour un besoin ponctuel ou récurrent, nous cadrons les priorités avant le passage afin de proposer une organisation lisible et adaptée à votre espace.", highlight: "Particuliers, professionnels et locations", image: "hero" },
];

export const faqGroups = [
  { title: "Prestations", intro: "Ce que nous pouvons prendre en charge.", items: [
    ["Quels types de nettoyage propose Cécile Nettoyage ?", "Nous proposons le ménage à domicile, l'entretien de bureaux et commerces, la remise au propre de locations saisonnières, les grands nettoyages et remises en état, ainsi que le nettoyage des vitres accessibles, cuisines et sanitaires."],
    ["Puis-je réserver un nettoyage ponctuel ?", "Oui. Une intervention peut être ponctuelle pour un grand nettoyage, un déménagement, une remise en état ou simplement lorsque vous avez besoin d'un renfort. Un entretien régulier peut aussi être mis en place."],
    ["Que comprend un grand nettoyage ?", "Le contenu est défini selon l'état et les priorités du lieu. Il peut comprendre les sols, poussières, cuisine, sanitaires, surfaces, portes, plinthes, détails visibles et zones moins accessibles. Les éléments souhaités sont précisés avant l'intervention."],
    ["Nettoyez-vous les vitres ?", "Oui, pour les surfaces vitrées accessibles dans des conditions normales et sûres. Précisez le nombre et le type de fenêtres lors de votre demande afin que la prestation soit correctement évaluée."],
  ]},
  { title: "Domicile & organisation", intro: "Pour préparer une intervention sereinement.", items: [
    ["Faut-il être présent pendant le nettoyage ?", "Pas nécessairement. Les modalités d'accès sont convenues avec vous avant le passage. Pour une première intervention, nous recommandons de transmettre clairement les priorités et les éventuelles consignes particulières."],
    ["Comment préparer mon logement avant votre arrivée ?", "Rangez si possible les objets personnels, papiers et objets fragiles, et libérez les surfaces que vous souhaitez faire nettoyer. Cela permet de consacrer davantage de temps au nettoyage lui-même."],
    ["Puis-je choisir les pièces ou tâches prioritaires ?", "Oui. Vous pouvez signaler les pièces, surfaces ou tâches qui comptent le plus pour vous. Pour un temps d'intervention défini, ces priorités permettent d'organiser le passage de façon plus efficace."],
    ["Proposez-vous un entretien régulier ?", "Oui. Selon les disponibilités, un rythme récurrent peut être organisé. La fréquence et le contenu sont définis en fonction du logement, de son usage et de vos attentes."],
  ]},
  { title: "Airbnb & professionnels", intro: "Des passages adaptés aux contraintes d'accueil et d'activité.", items: [
    ["Faites-vous le nettoyage des locations Airbnb et saisonnières ?", "Oui. La remise au propre peut inclure cuisine, salle de bain, sols, surfaces, contrôle visuel et gestion du linge selon la formule convenue. Les horaires sont organisés autour des départs et arrivées lorsque cela est possible."],
    ["Intervenez-vous dans les bureaux et commerces ?", "Oui. Les prestations peuvent couvrir les postes de travail, zones d'accueil, sanitaires, sols, surfaces et espaces de passage. Le contenu est adapté à la configuration et à l'activité du lieu."],
    ["Les horaires peuvent-ils s'adapter à mon activité ?", "Selon les disponibilités, les interventions professionnelles peuvent être organisées avant l'ouverture, après la fermeture ou sur un créneau qui limite la gêne pour vos équipes et vos clients."],
  ]},
  { title: "Devis & secteurs", intro: "Les informations utiles avant de nous contacter.", items: [
    ["Comment obtenir un devis de nettoyage ?", "Envoyez votre demande depuis la page Contact en précisant la ville, le type de lieu, la surface approximative, la prestation souhaitée, la fréquence et vos disponibilités. Plus la demande est précise, plus la réponse peut être adaptée."],
    ["Dans quelles villes intervenez-vous ?", "Nous couvrons notamment Lunel, Vendargues, Mauguio, Baillargues, Castelnau-le-Lez, Lattes, La Grande-Motte et Montpellier, ainsi que des communes proches selon les disponibilités."],
    ["Le prix est-il le même pour chaque intervention ?", "Non. Le tarif dépend notamment du type de lieu, de sa surface, de son état, du contenu demandé, de la fréquence et des contraintes particulières. C'est pourquoi nous privilégions un devis adapté au besoin."],
    ["Combien de temps à l'avance faut-il réserver ?", "Le plus tôt possible, surtout pour une remise en état, un déménagement ou une location saisonnière avec une date fixe. Pour une demande urgente, contactez-nous avec le créneau souhaité : nous confirmerons ce qui est possible selon le planning."],
  ]},
];
