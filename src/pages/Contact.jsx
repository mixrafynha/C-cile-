import Hero from "../components/Hero.jsx";
import { images } from "../data.js";

export default function Contact() {
  return (
    <main>
      <Hero
        page
        eyebrow="Contact"
        title="Un devis clair pour un espace impeccable."
        text="Envoyez la surface, le quartier, le type de nettoyage et la fréquence souhaitée."
        image={images.airbnbImage}
      />
      <section className="contact-section">
        <div className="contact-copy reveal visible">
          <p className="eyebrow">Demande rapide</p>
          <h2>Expliquez le besoin.</h2>
          <p>Cécile vous répond avec une proposition simple, adaptée au lieu et au niveau de finition attendu.</p>
        </div>
        <form className="contact-form reveal visible">
          <label>Nom<input type="text" placeholder="Votre nom" /></label>
          <label>Téléphone<input type="tel" placeholder="06 00 00 00 00" /></label>
          <label>
            Type de nettoyage
            <select>
              <option>Ménage à domicile</option>
              <option>Bureaux / commerce</option>
              <option>Location saisonnière</option>
              <option>Remise en état</option>
            </select>
          </label>
          <label>Message<textarea placeholder="Surface, quartier, fréquence..."></textarea></label>
          <button className="button primary" type="button">Envoyer la demande</button>
        </form>
      </section>
    </main>
  );
}
