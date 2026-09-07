import { Link } from "react-router-dom";

export default function ServiceCard({ number, title, text, detail }) {
  return (
    <article className="service-card reveal">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <strong>{detail}</strong>
      <Link to="/contact">Devis</Link>
    </article>
  );
}
