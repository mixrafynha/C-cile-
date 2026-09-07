import heroDesktop from "./assets/hero-cleaning-montpellier.webp";
import heroMobile from "./assets/hero-cleaning-montpellier-mobile.webp";
import officeImage from "./assets/office-cleaning.webp";
import ecoImage from "./assets/eco-cleaning-detail.webp";
import airbnbImage from "./assets/airbnb-cleaning.webp";

export const images = {
  heroDesktop,
  heroMobile,
  officeImage,
  ecoImage,
  airbnbImage
};

export const services = [
  ["01", "Ménage à domicile", "Entretien régulier, cuisine, salle de bain, sols, poussières, surfaces et détails visibles.", "Hebdomadaire ou ponctuel"],
  ["02", "Bureaux & commerces", "Accueil, postes de travail, sanitaires, sols, vitrines intérieures et zones de passage.", "Avant ouverture ou après fermeture"],
  ["03", "Locations Airbnb", "Remise au propre entre deux voyageurs, linge, cuisine, salle de bain et contrôle final.", "Check-list entre séjours"],
  ["04", "Remise en état", "Déménagement, après travaux légers, logement fermé longtemps ou grand nettoyage saisonnier.", "Intervention intensive"],
  ["05", "Vitres & traces", "Surfaces vitrées accessibles, miroirs, traces de doigts, finitions brillantes.", "Finition premium"],
  ["06", "Cuisine & sanitaires", "Zones sensibles, robinetterie, plaques, évier, douche, WC et surfaces de contact.", "Hygiène renforcée"]
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

export const areas = ["Écusson", "Antigone", "Port Marianne", "Boutonnet", "Castelnau-le-Lez", "Lattes"];
