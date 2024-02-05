import "./style.scss";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="content">
        <h2>Venha conhecer nossas promoções</h2>
        <h3>50% off nos produtos</h3>
        <button className="view-product">Ver produto</button>
      </div>
      <div className="overlay" />
    </section>
  );
}
