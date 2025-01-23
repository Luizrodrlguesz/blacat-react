import React from "react";
import "./main.scss";

const Footer = () => {
  return (
    <footer class="footer-content">
      <div class="container">
        <div class="row pb-120 pb-sm-80 pb-xs-50">
          <div class="col-md-4 col-lg-3 text-gray mb-sm-50">
            <div class="mb-30">
              <img
                src="src\assets\black-icon.png"
                width="105"
                height="105"
                alt="Your Company Logo"
              />
            </div>
            <p>
              Desenvolvendo soluções em estilo e auto-estima, com foco em
              inovação e eficiência.
            </p>
            <div class="clearlinks footer-list">
              <strong>
                <i class="bi bi-telephone"></i>
              </strong>
              <a href="tel:+18376528800">+55 9999-9999</a>
            </div>
            <div class="clearlinks footer-list">
              <strong>
                <i class="bi bi-envelope"></i>
              </strong>
              <a href="mailto:support@bestlooker.pro">blacat@suporte.com.br</a>
            </div>
          </div>
          <div class="col-md-7 offset-md-1 offset-lg-2 sub-step-footer">
            <div class="row mt-n30">
              <div class="col-sm-4 mt-30 step-footer">
                <h3 class="footer-tittle">Ajuda</h3>
                <ul class="footer-list local-scroll">
                  <li>
                    <a href="#about">Duvidas Gerais</a>
                  </li>
                  <li>
                    <a href="#services">Encontre seu tamanho</a>
                  </li>
                  <li>
                    <a href="#portfolio">Entregas</a>
                  </li>
                  <li>
                    <a href="#blog">Pedidos</a>
                  </li>
                  <li>
                    <a href="#contact">Extornos</a>
                  </li>
                  <li>
                    <a href="#portfolio">Pagamentos</a>
                  </li>
                  <li>
                    <a href="#blog">Produtos</a>
                  </li>
                  <li>
                    <a href="#contact">Fale conosco</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 mt-30 step-footer">
                <h3 class="footer-tittle">Sobre a Blacat</h3>
                <ul class="footer-list">
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      Propósito
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      Sustentabilidade
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      Sobre a Blacat, Inc.
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      Nossa História
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      Termos de Uso
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener nofollow" target="_blank">
                      Politica de Provacidade
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-4 mt-30 step-footer">
                <h3 class="footer-tittle">Redes Sociais</h3>
                <ul class="footer-list">
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
                <h3 class="footer-tittle">Formas de Pagamento</h3>
                <ul class="footer-list footer-card-list">
                  <li>
                    <img class="card-flag" src="src\assets\paypal.png" alt="" />
                  </li>
                  <li>
                    <img
                      class="card-flag"
                      src="src\assets\mastercard.png"
                      alt=""
                    />
                  </li>
                  <li>
                    <img class="card-flag" src="src\assets\visa.png" alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
