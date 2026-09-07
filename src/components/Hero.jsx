export default function Hero({ eyebrow, title, text, image, mobileImage, children, page = false }) {
  if (page) {
    return (
      <section className="page-hero">
        <img src={image} alt="" width="1600" height="900" />
        <div className="page-hero-copy reveal visible">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <picture className="hero-media">
        {mobileImage ? <source media="(max-width: 820px)" srcSet={mobileImage} /> : null}
        <img src={image} alt="Appartement lumineux et propre à Montpellier" width="1600" height="900" fetchPriority="high" />
      </picture>
      <div className="hero-overlay"></div>
      <div className="hero-content reveal visible">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-copy">{text}</p>
        {children}
      </div>
    </section>
  );
}
