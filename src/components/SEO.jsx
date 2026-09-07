import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const pages = {
  "/": {
    title: "Cécile Nettoyage | Nettoyage à Lunel 34400",
    description: "Cécile Nettoyage propose des services de nettoyage soignés à Lunel 34400 et dans un rayon d'environ 100 km : maisons, bureaux et locations saisonnières."
  },
  "/services": {
    title: "Services de nettoyage à Lunel 34400 | Cécile Nettoyage",
    description: "Découvrez les services de Cécile Nettoyage à Lunel 34400 et autour : ménage à domicile, bureaux, Airbnb, vitres, sanitaires et remise en état."
  },
  "/formules": {
    title: "Formules de ménage à Lunel 34400 | Cécile Nettoyage",
    description: "Comparez les formules de nettoyage essentiel, premium et professionnel pour votre maison, bureau ou location à Lunel et dans un rayon de 100 km."
  },
  "/catalogue": {
    title: "Catalogue de nettoyage | Cécile Nettoyage Lunel",
    description: "Choisissez le type de nettoyage adapté à votre besoin à Lunel 34400 et alentours : maison, bureaux, location saisonnière ou remise en état."
  },
  "/secteurs": {
    title: "Zones desservies autour de Lunel 34400 | Cécile Nettoyage",
    description: "Cécile Nettoyage intervient depuis Lunel 34400 dans un rayon d'environ 100 km, notamment vers Montpellier, Nîmes, La Grande-Motte et les communes proches."
  },
  "/contact": {
    title: "Devis nettoyage à Lunel 34400 | Cécile Nettoyage",
    description: "Demandez un devis gratuit pour un nettoyage de maison, bureau ou location saisonnière à Lunel 34400 et dans un rayon d'environ 100 km."
  }
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cécile Nettoyage",
  description: "Services de nettoyage pour particuliers, professionnels et locations saisonnières à Lunel 34400 et dans un rayon d'environ 100 km.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lunel",
    postalCode: "34400",
    addressCountry: "FR"
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 43.6773,
      longitude: 4.1359
    },
    geoRadius: "100 km"
  },
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
