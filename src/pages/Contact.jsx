import { useState } from "react";
import Hero from "../components/Hero.jsx";
import { images } from "../data.js";

export default function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", message: "" });
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "Impossible d’envoyer la demande.");
      form.reset();
      setStatus({ type: "success", message: "Merci ! Votre demande a bien été envoyée. Nous vous répondrons rapidement." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Une erreur est survenue. Réessayez." });
    } finally {
      setSending(false);
    }
  }

  return (
    <main>
      <Hero
        page
        eyebrow="Contact"
        title="Devis nettoyage local."
        text="Indiquez le lieu, la surface et le type de nettoyage souhaité."
        image={images.airbnbImage}
      />
      <section className="contact-section">
        <div className="contact-copy reveal">
          <p className="eyebrow">Demande rapide</p>
          <h2>Expliquez le besoin.</h2>
          <p>Cécile vous répond avec une proposition simple, adaptée au lieu et au niveau de finition attendu.</p>
        </div>
        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <label>Nom<input name="name" type="text" placeholder="Votre nom" autoComplete="name" required maxLength="100" /></label>
          <label>E-mail<input name="email" type="email" placeholder="vous@exemple.fr" autoComplete="email" required maxLength="200" /></label>
          <label>Téléphone<input name="phone" type="tel" placeholder="06 00 00 00 00" autoComplete="tel" maxLength="50" /></label>
          <label>
            Type de nettoyage
            <select name="service" defaultValue="Ménage à domicile">
              <option>Ménage à domicile</option>
              <option>Bureaux / commerce</option>
              <option>Location saisonnière</option>
              <option>Remise en état</option>
            </select>
          </label>
          <label>Message<textarea name="message" placeholder="Surface, quartier, fréquence..." required maxLength="3000"></textarea></label>
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
            <label>Site web<input name="website" type="text" tabIndex="-1" autoComplete="off" /></label>
          </div>
          <button className="button primary" type="submit" disabled={sending}>{sending ? "Envoi..." : "Envoyer la demande"}</button>
          {status.message && <p role="status" className={`form-status ${status.type}`}>{status.message}</p>}
        </form>
      </section>
    </main>
  );
}
