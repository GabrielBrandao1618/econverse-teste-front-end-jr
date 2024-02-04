import "./style.scss";

import { HeroSection } from "./sections/hero";
import { ProductsSection } from "./sections/products";
import { InfosSection } from "./sections/infos";

export function HomePage() {
  return (
    <main className="home">
      <HeroSection />
      <ProductsSection />
      <InfosSection />
    </main>
  );
}
