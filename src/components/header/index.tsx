import { CreditCardIcon } from "../icons/creditCardIcon";
import { CrownIcon } from "../icons/crownIcon";
import { DeliverIcon } from "../icons/deliverIcon";
import { HeartIcon } from "../icons/heartIcon";
import { SearchIcon } from "../icons/searchIcon";
import { ShieldCheckIcon } from "../icons/shieldCheckIcon";
import { ShoppingCartIcon } from "../icons/shoppingCartIcon";
import { TruckIcon } from "../icons/truckIcon";
import { UserCircleIcon } from "../icons/userCircleIcon";
import "./style.scss";

export function Header() {
  return (
    <header className="header-component">
      <div className="top">
        <span className="info">
          <ShieldCheckIcon width={20} height={20} />
          <p>
            Compra <b>100% segura</b>
          </p>
        </span>
        <span className="info">
          <TruckIcon width={20} height={20} />
          <p>
            <b>Frete grátis</b> acima de R$ 200
          </p>
        </span>
        <span className="info">
          <CreditCardIcon width={20} height={20} />
          <p>
            <b>Parcele</b> suas compras
          </p>
        </span>
      </div>
      <hr />
      <div className="middle">
        <div className="logo">
          <img
            src="/vtex-logo.svg"
            alt="A logo that consists in a triangle-like shape next to the text Vtex"
          />
        </div>
        <div className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="O que você está buscando?"
          />
          <SearchIcon width={28} height={28} />
        </div>
        <ul className="options">
          <li>
            <DeliverIcon width={26} height={26} />
          </li>
          <li>
            <HeartIcon width={32} height={32} />
          </li>
          <li>
            <UserCircleIcon width={32} height={32} />
          </li>
          <li>
            <ShoppingCartIcon width={32} height={32} />
          </li>
        </ul>
      </div>
      <hr />
      <div className="bottom">
        <nav>
          <ul>
            <li>Todas as categorias</li>
            <li>Supermercado</li>
            <li>Livros</li>
            <li>Moda</li>
            <li>Lançamentos</li>
            <li>Ofertas do dia</li>
            <li>
              <div>
                <CrownIcon width={20} height={20} />
                <span>Assinatura</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
