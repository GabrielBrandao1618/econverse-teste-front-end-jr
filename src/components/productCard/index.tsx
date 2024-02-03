import "./style.scss";

type Props = {
  name: string;
  descriptionShort: string;
  price: number;
  photoUrl: string;
};
export function ProductCard({ name, photoUrl, price }: Props) {
  return (
    <div className="product-card">
      <img src={photoUrl} alt="" />
      <div className="content">
        <p className="name">{name}</p>
        <span className="price">R$ {price}</span>
        <span className="free-shipping">Frete grátis</span>
        <button className="purchase-btn">Comprar</button>
      </div>
    </div>
  );
}
