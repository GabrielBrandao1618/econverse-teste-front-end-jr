import "./style.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="links">
          <div className="about">
            <h3>Sobre nós</h3>
            <ul className="about-links">
              <li>
                <a>Conheça</a>
              </li>
              <li>
                <a>Como comprar</a>
              </li>
              <li>
                <a>Indicação e desconto</a>
              </li>
            </ul>
            <div className="logos">
              <img src="/img/icons/facebook.svg" alt="" />
              <img src="/img/icons/instagram.svg" alt="" />
              <img src="/img/icons/youtube.svg" alt="" />
            </div>
          </div>
          <div className="infos">
            <h3>Informações úteis</h3>
            <ul className="infos-links">
              <li>
                <a>Fale conosco</a>
              </li>
              <li>
                <a>Dúvidas</a>
              </li>
              <li>
                <a>Prazos de entrega</a>
              </li>
              <li>
                <a>Formas de pagamento</a>
              </li>
              <li>
                <a>Política de privacidade</a>
              </li>
              <li>
                <a>Trocas e devoluções</a>
              </li>
            </ul>
          </div>
          <div className="payments">
            <h3>Formas de pagamento</h3>
            <div className="logos">
              <img src="/img/icons/visa.svg" alt="" />
              <img src="/img/icons/elo.svg" alt="" />
              <img src="/img/icons/alelo.svg" alt="" />
              <img src="/img/icons/dinners.svg" alt="" />
              <img src="/img/icons/ifood.svg" alt="" />
              <img src="/img/icons/mastercard.svg" alt="" />
              <img src="/img/icons/pix.svg" alt="" />
              <img src="/img/icons/express.svg" alt="" />
              <img src="/img/icons/ticket.svg" alt="" />
              <img src="/img/icons/sodexo.svg" alt="" />
            </div>
          </div>
        </div>
        <form className="subscribe" onSubmit={(e) => e.preventDefault()}>
          <div className="header">
            <h3>
              Cadastre-se e receba nossas <strong>novidades e promoções</strong>
            </h3>
            <p>
              Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia
              lorem ipsum
            </p>
          </div>
          <div className="inputs">
            <input type="email" placeholder="Seu e-mail" />
            <button type="submit">Ok</button>
          </div>
        </form>
      </div>
      <hr />
      <div className="bottom">
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>
        <div className="logos">
          <img src="/img/econverse-white.png" alt="" />
          <img src="/img/vtex-white.png" alt="" />
        </div>
      </div>
    </footer>
  );
}
