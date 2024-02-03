import "./style.scss";

import { HeroSection } from "./sections/hero";
import { ProductsSection } from "./sections/products";

export function HomePage() {
  return (
    <main className="home">
      <HeroSection />
      <ProductsSection />
    </main>
  );
}
