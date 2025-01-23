import React from "react";
import "./main.scss";

const Male = () => {
  return (
    <div>
      <div class="male-content">
        <div class="male-title">
          <h1 class="male-title__content t4desktop-Helvetica t4mobile-Helvetica">
            Masculino
          </h1>
        </div>
        <ul class="male-content__lista">
          <li class="male-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              class="male-content__lista-link"
            >
              Roupas Casuais
            </a>
          </li>
          <li class="male-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              class="male-content__lista-link"
            >
              Artigos Esportivos
            </a>
          </li>
          <li class="male-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              class="male-content__lista-link"
            >
              Acessórios
            </a>
          </li>
          <li class="male-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              class="male-content__lista-link"
            >
              Ofertas
            </a>
          </li>
        </ul>
      </div>

      <div className="banner">
        <img
          src="src\assets\male-1.png"
          alt="Promoção Especial"
          className="banner-img-woman"
        />
        <div className="banner-text">
          <h2>Promoção Imperdível!</h2>
          <p>Descontos especiais em todos os produtos. Aproveite agora!</p>
        </div>
      </div>

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\male-casual.png"
                class="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">CASUAL</p>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\male-sport.png"
                class="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">ESPORTIVO</p>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\male-stuff.png"
                class="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">ACESSÓRIOS</p>
          </div>
        </div>
        <p></p>
        <div class="col"></div>
        <p></p>
      </div>
      <div className="banner">
        <img
          src="src\assets\offers-2.webp"
          alt="Promoção Especial StreetWear"
          className="banner-img-woman"
        />
        <div className="banner-text">
          <h2>Coleção StreetWear 2025!</h2>
          <p>
            Desfrute de descontos imperdíveis na nossa nova coleção de roupas
            StreetWear. Estilos exclusivos, qualidade premium e preço acessível.
            Não perca a chance de renovar seu guarda-roupa com os melhores
            looks!
          </p>
          <button className="colection-btn">Ver Coleção</button>
        </div>
      </div>
    </div>
  );
};

export default Male;
