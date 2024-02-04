import { WalkingIcon } from "../../../../components/icons/walkingIcon";
import { ProductCard } from "../../../../components/productCard";
import { ProductCategoryCard } from "../../../../components/productCategoryCard";
import { SectionTitle } from "../../../../components/sectionTitle";
import { products } from "../../../../data/products";
import "./style.scss";

export function ProductsSection() {
  return (
    <section className="products">
      <div className="categories">
        {new Array(10).fill(0).map((item) => (
          <ProductCategoryCard name="Esportes e fitness" key={item}>
            <WalkingIcon width={61} height={61} />
          </ProductCategoryCard>
        ))}
      </div>
      <SectionTitle text="Produtos relacionados" />
      <div className="products-list">
        {products.map((product) => (
          <ProductCard
            descriptionShort={product.descriptionShort}
            name={product.productName}
            photoUrl={product.photo}
            price={product.price}
            key={product.productName}
          />
        ))}
      </div>
    </section>
  );
}
