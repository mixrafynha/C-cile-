import { Link } from "react-router-dom";

const legalContent = {
  mentions: {
    eyebrow: "Informations légales",
    title: "Mentions légales",
    intro: "Cette page présente les informations obligatoires relatives à l’éditeur et à l’hébergement du site.",
    sections: [
      ["Éditeur du site", "Nom ou raison sociale : À compléter\nAdresse : À compléter\nSIREN / SIRET : À compléter\nEmail : À compléter\nTéléphone : À compléter"],
      ["Directeur de la publication", "Nom : À compléter"],
      ["Hébergement", "Hébergeur : Vercel Inc.\nAdresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis\nSite : vercel.com"],
      ["Propriété intellectuelle", "Les textes, visuels, marques et éléments graphiques présents sur ce site ne peuvent pas être reproduits sans autorisation préalable."]
    ]
  },
  privacy: {
    eyebrow: "Données personnelles",
    title: "Politique de confidentialité",
    intro: "Cécile Nettoyage traite les données transmises via le formulaire uniquement pour répondre aux demandes de devis et organiser un échange.",
    sections: [
      ["Données collectées", "Nom, téléphone, type de nettoyage et message. Les champs doivent rester limités aux informations nécessaires à votre demande."],
      ["Finalité et durée", "Les données sont utilisées pour répondre à votre demande, puis conservées pendant la durée nécessaire au suivi de la relation ou conformément aux obligations légales applicables."],
      ["Vos droits", "Vous pouvez demander l’accès, la rectification, l’effacement, la limitation ou vous opposer au traitement de vos données en contactant l’éditeur à l’adresse indiquée dans les mentions légales."],
      ["Réclamation", "Vous pouvez également contacter la CNIL si vous estimez que vos droits ne sont pas respectés."]
    ]
  },
  cookies: {
    eyebrow: "Traceurs",
    title: "Politique cookies",
    intro: "Le site utilise un stockage local nécessaire pour mémoriser votre choix concernant le bandeau de consentement.",
    sections: [
      ["Cookies nécessaires", "Le stockage local cecile-cookie-consent-v1 mémorise votre choix pendant 6 mois. Il ne sert pas à vous identifier ni à suivre votre navigation."],
      ["Cookies facultatifs", "Aucun cookie publicitaire ou outil de mesure d’audience facultatif n’est activé par défaut. Si un outil est ajouté, votre consentement sera demandé avant son activation."],
      ["Modifier votre choix", "Vous pouvez rouvrir le gestionnaire à tout moment avec le bouton “Gérer mes cookies” présent sur le site."]
    ]
  }
};

export default function Legal({ type }) {
  const page = legalContent[type];

  return (
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className="legal-content">
        {page.sections.map(([title, text]) => (
          <article key={title}>
            <h2>{title}</h2>
            {text.split("\n").map((line) => <p key={line}>{line}</p>)}
          </article>
        ))}
        <Link className="button primary" to="/">Retour à l’accueil</Link>
      </section>
    </main>
  );
}
