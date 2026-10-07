import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { cityPages, faqGroups } from "../data.js";

const pages = {
  "/": {
    title: "Entreprise de nettoyage à Lunel | Cécile Nettoyage",
    description: "Nettoyage de maisons, bureaux et locations saisonnières à Lunel, Vendargues, Mauguio et alentours. Demandez votre devis de nettoyage.",
  },
  "/services": {
    title: "Services de nettoyage à Lunel | Cécile Nettoyage",
    description: "Ménage à domicile, bureaux, Airbnb, vitres et remise en état à Lunel, Vendargues, Mauguio et communes proches.",
  },
  "/formules": {
    title: "Formules de ménage à Lunel | Cécile Nettoyage",
    description: "Découvrez les formules de nettoyage pour maison, bureau ou location saisonnière à Lunel, Vendargues, Mauguio et alentours.",
  },
  "/catalogue": {
    title: "Prestations de nettoyage à Lunel | Cécile Nettoyage",
    description: "Nettoyage complet de maison, bureaux, locations Airbnb, vitres, déménagement et remise en état autour de Lunel.",
  },
  "/secteurs": {
    title: "Zones d’intervention nettoyage | Cécile Nettoyage",
    description: "Cécile Nettoyage intervient à Lunel, Vendargues, Mauguio, Baillargues, Castelnau-le-Lez, Lattes, Montpellier et alentours.",
  },
  "/faq": {
    title: "FAQ nettoyage | Cécile Nettoyage",
    description: "Questions fréquentes sur le ménage, les bureaux, Airbnb, devis et zones d’intervention de Cécile Nettoyage autour de Lunel.",
  },
  "/contact": {
    title: "Devis nettoyage à Lunel | Cécile Nettoyage",
    description: "Demandez un devis pour le nettoyage de votre maison, bureau, Airbnb ou une remise en état à Lunel, Vendargues ou Mauguio.",
  },
  "/mentions-legales": { title: "Mentions légales | Cécile Nettoyage", description: "Mentions légales du site Cécile Nettoyage.", noindex: true },
  "/politique-confidentialite": { title: "Politique de confidentialité | Cécile Nettoyage", description: "Politique de confidentialité du site Cécile Nettoyage.", noindex: true },
  "/cookies": { title: "Politique cookies | Cécile Nettoyage", description: "Informations sur les cookies et le stockage local utilisés par Cécile Nettoyage.", noindex: true },
};

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

export default function SEO() {
  const { pathname } = useLocation();
  const citySlug = pathname.startsWith("/nettoyage/") ? pathname.split("/").filter(Boolean)[1] : null;
  const city = cityPages.find((item) => item.slug === citySlug);
  const page = city ? {
    title: `Entreprise de nettoyage à ${city.name} | Cécile Nettoyage`,
    description: city.seoDescription,
  } : pages[pathname];

  useEffect(() => {
    const data = page || {
      title: "Page introuvable | Cécile Nettoyage",
      description: "La page demandée est introuvable.",
      noindex: true,
    };
    const canonical = `${window.location.origin}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;
    const robots = data.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

    document.title = data.title;
    upsertMeta('meta[name="description"]', { name: "description", content: data.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: robots });
    upsertMeta('meta[name="googlebot"]', { name: "googlebot", content: robots });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: data.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: data.description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "fr_FR" });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Cécile Nettoyage" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: data.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: data.description });
    upsertLink("canonical", canonical);

    const faqItems = faqGroups.flatMap((group) => group.items);

    const schemaData = [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Cécile Nettoyage",
        url: `${window.location.origin}/`,
        inLanguage: "fr-FR",
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${window.location.origin}/#business`,
        name: "Cécile Nettoyage",
        url: `${window.location.origin}/`,
        description: "Services de nettoyage pour particuliers, professionnels et locations saisonnières à Lunel, Vendargues, Mauguio et alentours.",
        address: { "@type": "PostalAddress", addressLocality: "Lunel", postalCode: "34400", addressCountry: "FR" },
        areaServed: ["Lunel", "Vendargues", "Mauguio", "Baillargues", "Castelnau-le-Lez", "Lattes", "Montpellier"].map((name) => ({ "@type": "City", name })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Services de nettoyage",
          itemListElement: ["Ménage à domicile", "Nettoyage de bureaux", "Nettoyage de locations saisonnières", "Remise en état"].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
        },
      },
    ];
    if (pathname === "/faq") {
      schemaData.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqItems.map(([name, text]) => ({ "@type": "Question", name, acceptedAnswer: { "@type": "Answer", text } })),
      });
    }
    if (city) {
      schemaData.push({
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Entreprise de nettoyage à ${city.name}`,
        serviceType: ["Ménage à domicile", "Nettoyage de bureaux", "Nettoyage de commerces", "Nettoyage de locations saisonnières", "Nettoyage de vitres", "Remise en état"],
        provider: { "@id": `${window.location.origin}/#business` },
        areaServed: { "@type": "City", name: city.name },
        url: canonical,
      });
      schemaData.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${window.location.origin}/` },
          { "@type": "ListItem", position: 2, name: "Zones d’intervention", item: `${window.location.origin}/secteurs` },
          { "@type": "ListItem", position: 3, name: `Nettoyage à ${city.name}`, item: canonical },
        ],
      });
    }

    let schema = document.head.querySelector("script[data-seo-schema]");
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.seoSchema = "true";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(schemaData);
  }, [page, pathname, city]);

  return null;
}
