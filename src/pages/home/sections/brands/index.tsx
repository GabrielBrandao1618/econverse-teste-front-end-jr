import { BrandBadge } from "../../../../components/branchBadge";
import "./style.scss";

export function BrandsSection() {
  return (
    <section className="brands-section">
      <h2>Navegue por marcas</h2>
      <div className="brands-list">
        <BrandBadge imgUrl="/vtex-logo.svg" />
        <BrandBadge imgUrl="/vtex-logo.svg" />
        <BrandBadge imgUrl="/vtex-logo.svg" />
        <BrandBadge imgUrl="/vtex-logo.svg" />
        <BrandBadge imgUrl="/vtex-logo.svg" />
      </div>
    </section>
  );
}
