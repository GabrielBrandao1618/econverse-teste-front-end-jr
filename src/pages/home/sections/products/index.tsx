import { WalkingIcon } from "../../../../components/icons/walkingIcon";
import { ProductCard } from "../../../../components/productCard";
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
      <div className="products-title-container">
        <hr />
        <h2>Produtos relacionados</h2>
        <hr />
      </div>
      <div className="products-list">
        <ProductCard
          name="Iphone 11 PRO MAX BRANCO 1"
          descriptionShort="Iphone 11 PRO MAX BRANCO 1"
          photoUrl="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png"
          price={15000}
        />
      </div>
    </section>
  );
}
