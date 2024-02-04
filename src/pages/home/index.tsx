import "./style.scss";

import { HeroSection } from "./sections/hero";
import { ProductsSection } from "./sections/products";
import { InfosSection } from "./sections/infos";
import { BrandsSection } from "./sections/brands";

export function HomePage() {
  return (
    <main className="home">
      <HeroSection />
      <ProductsSection />
      <InfosSection />
      <BrandsSection />
    </main>
  );
}
