import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pages = {
  "/": {
    title: "Nettoyage maison et bureaux à Lunel | Cécile Nettoyage",
    description: "Service de nettoyage maison, bureaux et locations à Lunel 34400, Vendargues, Mauguio et alentours. Devis clair et réponse rapide."
  },
  "/services": {
    title: "Services de nettoyage | Lunel, Vendargues, Mauguio",
    description: "Ménage à domicile, nettoyage de bureaux, Airbnb, vitres, sanitaires et remise en état à Lunel 34400, Vendargues et Mauguio."
  },
  "/formules": {
    title: "Formules ménage | Lunel, Vendargues, Mauguio",
    description: "Formules de nettoyage simples pour maison, bureau ou location saisonnière à Lunel, Vendargues, Mauguio et alentours."
  },
  "/catalogue": {
    title: "Catalogue nettoyage | Lunel, Vendargues, Mauguio",
    description: "Nettoyage maison, bureaux, Airbnb, vitres et remise en état à Lunel 34400, Vendargues, Mauguio et communes proches."
  },
  "/secteurs": {
    title: "Zones nettoyage | Lunel, Vendargues, Mauguio",
    description: "Cécile Nettoyage intervient à Lunel 34400, Vendargues, Mauguio, Baillargues, Castelnau-le-Lez, Lattes et Montpellier."
  },
  "/contact": {
    title: "Devis nettoyage | Lunel, Vendargues, Mauguio",
    description: "Demandez un devis de nettoyage à Lunel 34400, Vendargues ou Mauguio pour maison, bureau, Airbnb ou remise en état."
  }
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cécile Nettoyage",
  description: "Services de nettoyage pour particuliers, professionnels et locations saisonnières à Lunel 34400, Vendargues, Mauguio et alentours.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lunel",
    postalCode: "34400",
    addressCountry: "FR"
  },
  areaServed: [
    { "@type": "City", name: "Lunel" },
    { "@type": "City", name: "Vendargues" },
    { "@type": "City", name: "Mauguio" },
    { "@type": "AdministrativeArea", name: "Hérault" }
  ],
  serviceType: ["Ménage à domicile", "Nettoyage de bureaux", "Nettoyage Airbnb", "Remise en état"]
};

function setMeta(name, content) {
  let element = document.querySelector(`meta[name="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setProperty(property, content) {
  let element = document.querySelector(`meta[property="${property}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SEO() {
  const { pathname } = useLocation();
  const page = pages[pathname] || pages["/"];

  useEffect(() => {
    document.title = page.title;
    setMeta("description", page.description);
    setProperty("og:title", page.title);
    setProperty("og:description", page.description);
    setProperty("og:type", "website");
    setProperty("og:locale", "fr_FR");
    setProperty("og:site_name", "Cécile Nettoyage");

    let schema = document.querySelector("script[data-seo-schema]");
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.seoSchema = "true";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(businessSchema);
  }, [page, pathname]);

  return null;
}
