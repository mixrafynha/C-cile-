import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="legal-page">
      <section className="legal-hero">
        <p className="eyebrow">Erreur 404</p>
        <h1>Page introuvable.</h1>
        <p>Cette page n’existe pas ou a été déplacée.</p>
      </section>
      <section className="legal-content">
        <Link className="button primary" to="/">Retour à l’accueil</Link>
      </section>
    </main>
  );
}
