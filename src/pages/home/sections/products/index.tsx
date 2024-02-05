import { ProductCard } from "../../../../components/productCard";
import { ProductCategoryCard } from "../../../../components/productCategoryCard";
import { SectionTitle } from "../../../../components/sectionTitle";
import { products } from "../../../../data/products";
import "./style.scss";

export function ProductsSection() {
  return (
    <section className="products">
      <div className="categories">
        <ProductCategoryCard name="Esportes e fitness">
          <img src="/img/icons/devices.svg" alt="" />
        </ProductCategoryCard>
        <ProductCategoryCard name="Esportes e fitness">
          <img src="/img/icons/supermarket.svg" alt="" />
        </ProductCategoryCard>
        <ProductCategoryCard name="Esportes e fitness">
          <img src="/img/icons/whiskey.svg" alt="" />
        </ProductCategoryCard>
        <ProductCategoryCard name="Esportes e fitness">
          <img src="/img/icons/tools.svg" alt="" />
        </ProductCategoryCard>
        <ProductCategoryCard name="Esportes e fitness">
          <img src="/img/icons/healthcare.svg" alt="" />
        </ProductCategoryCard>
        <ProductCategoryCard name="Esportes e fitness">
          <img src="/img/icons/running.svg" alt="" />
        </ProductCategoryCard>
        <ProductCategoryCard name="Esportes e fitness">
          <img src="/img/icons/fashion.svg" alt="" />
        </ProductCategoryCard>
      </div>
      <SectionTitle text="Produtos relacionados" />
      <div className="products-list">
        {products.map((product) => (
          <ProductCard
            descriptionShort={product.descriptionShort}
            name={product.productName}
            photoUrl={product.photo}
            price={product.price}
            key={`${product.productName}${product.descriptionShort}`}
          />
        ))}
      </div>
    </section>
  );
}
