import React from "react";
import "./main.scss";

const Sports = () => {
  return (
    <div>
      <div class="female-content">
        <div class="female-title">
          <h1 class="female-title__content t4desktop-Helvetica t4mobile-Helvetica">
            Artigos Esportivos
          </h1>
        </div>
        <ul class="female-content__lista">
          <li class="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              class="female-content__lista-link"
            >
              Masculino
            </a>
          </li>
          <li class="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              class="female-content__lista-link"
            >
              Feminino
            </a>
          </li>
          <li class="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              class="female-content__lista-link"
            >
              Infantil
            </a>
          </li>
          <li class="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              class="female-content__lista-link"
            >
              Acessórios
            </a>
          </li>
        </ul>
      </div>
      <div className="banner">
        <img
          src="src\assets\sport-banner.png"
          alt="Promoção Especial"
          className="banner-img-woman"
        />
        <div className="banner-text">
          <h2>Promoção Imperdível!</h2>
          <p>Descontos especiais em todos os produtos. Aproveite agora!</p>
        </div>
      </div>

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\male-sport.png"
                class="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">MASCULINO</p>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\female-sport.png"
                class="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">FEMININO</p>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\child-sport.png"
                class="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">INFANTIL</p>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\acessories-sport.png"
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
    </div>
  );
};

export default Sports;
