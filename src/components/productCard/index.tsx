import "./style.scss";

import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { ProductCounter } from "../productCounter";

type Props = {
  name: string;
  descriptionShort: string;
  price: number;
  photoUrl: string;
};
export function ProductCard({
  name,
  photoUrl,
  price,
  descriptionShort,
}: Props) {
  return (
    <Dialog.Root>
      <div className="product-card">
        <img src={photoUrl} alt="" />
        <div className="content">
          <p className="name">{name}</p>
          <span className="price">R$ {price}</span>
          <span className="free-shipping">Frete grátis</span>
          <Dialog.Trigger className="purchase-btn">Comprar</Dialog.Trigger>
        </div>
      </div>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <img src={photoUrl} alt="" />
          <div className="info">
            <Dialog.Title className="title">{name}</Dialog.Title>
            <span className="price">R$ {price}</span>
            <Dialog.Description className="description">
              {descriptionShort}
            </Dialog.Description>
            <a className="details">Veja mais detalhes do produto {">"}</a>
            <ProductCounter />
            <button className="purchase">Comprar</button>
          </div>
          <Dialog.Close asChild>
            <button className="close-button">
              <Cross2Icon width={32} height={32} color="#707070" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
