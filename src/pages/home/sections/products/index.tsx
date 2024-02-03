import { WalkingIcon } from "../../../../components/icons/walkingIcon";
import { ProductCategoryCard } from "../../../../components/productCategoryCard";
import "./style.scss";

export function ProductsSection() {
  return (
    <section className="products">
      <div className="categories">
        {new Array(10).fill(0).map(() => (
          <ProductCategoryCard name="Esportes e fitness">
            <WalkingIcon width={61} height={61} />
          </ProductCategoryCard>
        ))}
      </div>
    </section>
  );
}
