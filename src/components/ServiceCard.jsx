import { Link } from "react-router-dom";

export default function ServiceCard({ number, title, text, detail, image }) {
  return (
    <article className="service-card reveal">
      <img className="service-card-image" src={image} alt={title} loading="lazy" decoding="async" />
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
      <strong>{detail}</strong>
      <Link to="/contact">Devis</Link>
    </article>
  );
}
