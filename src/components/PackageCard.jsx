import { Link } from "react-router-dom";

export default function PackageCard({ pack }) {
  return (
    <article className={`package-card reveal visible ${pack.featured ? "featured" : ""}`}>
      <span>{pack.label}</span>
      <h3>{pack.title}</h3>
      <p>{pack.text}</p>
      <ul>
        {pack.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link to="/contact">{pack.cta}</Link>
    </article>
  );
}
