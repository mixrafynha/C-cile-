import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/cecile-logo.webp";

const links = [
  ["/services", "Services"],
  ["/formules", "Formules"],
  ["/catalogue", "Catalogue"],
  ["/secteurs", "Secteurs"],
  ["/contact", "Contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <Link className="brand" to="/" aria-label="Cécile Nettoyage accueil" onClick={() => setOpen(false)}>
        <img className="brand-logo" src={logo} alt="Cécile Nettoyage" />
      </Link>
      <button className="mobile-menu-button menu-button" type="button" aria-label="Ouvrir le menu" onClick={() => setOpen((value) => !value)}>
        <span></span>
        <span></span>
      </button>
      <nav className={`main-nav mobile-dropdown ${open ? "open" : ""}`}>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} onClick={() => setOpen(false)}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
