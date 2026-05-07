import React from "react";

const Female = () => {
  return (
    <div>
      <div className="female-content">
        <div className="female-title">
          <h1 className="female-title__content t4desktop-Helvetica t4mobile-Helvetica">
            Feminino
          </h1>
        </div>
        <ul className="female-content__lista">
          <li className="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              className="female-content__lista-link"
            >
              Artigos Esportivos
            </a>
          </li>
          <li className="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              className="female-content__lista-link"
            >
              Roupas Casuais
            </a>
          </li>
          <li className="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              className="female-content__lista-link"
            >
              Acessórios
            </a>
          </li>
          <li className="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              className="female-content__lista-link"
            >
              Ofertas
            </a>
          </li>
        </ul>
      </div>
      <div className="banner">
        <img
          src="/assets/women-e1.png"
          alt="Promoção Especial"
          className="banner-img-woman"
        />
        <div className="banner-text">
          <h2>Promoção Imperdível!</h2>
          <p>Descontos especiais em todos os produtos. Aproveite agora!</p>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/assets/female-casual.png"
                className="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">CASUAL</p>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/assets/female-sport.png"
                className="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">ESPORTIVO</p>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/assets/female-stuff.png"
                className="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">ACESSÓRIOS</p>
          </div>
        </div>
        <p></p>
        <div className="col"></div>
        <p></p>
      </div>
    </div>
  );
};

export default Female;
