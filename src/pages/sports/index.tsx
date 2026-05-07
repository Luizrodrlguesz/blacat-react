import React from "react";

const Sports = () => {
  return (
    <div>
      <div className="female-content">
        <div className="female-title">
          <h1 className="female-title__content t4desktop-Helvetica t4mobile-Helvetica">
            Artigos Esportivos
          </h1>
        </div>
        <ul className="female-content__lista">
          <li className="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              className="female-content__lista-link"
            >
              Masculino
            </a>
          </li>
          <li className="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              className="female-content__lista-link"
            >
              Feminino
            </a>
          </li>
          <li className="female-content__lista-item">
            <a
              href="#"
              data-bannerposition="topmenu"
              className="female-content__lista-link"
            >
              Infantil
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
        </ul>
      </div>
      <div className="banner">
        <img
          src="/assets/sport-banner.png"
          alt="Promoção Especial"
          className="banner-img-woman"
        />
        <div className="banner-text">
          <h2>Promoção Imperdível!</h2>
          <p>Descontos especiais em todos os produtos. Aproveite agora!</p>
        </div>
      </div>

      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/assets/male-sport.png"
                className="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">MASCULINO</p>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/assets/female-sport.png"
                className="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">FEMININO</p>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/assets/child-sport.png"
                className="card-img-top"
                alt="Card Thumbnail"
              />
            </div>
            <p className="category-title">INFANTIL</p>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img
                src="/assets/acessories-sport.png"
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

export default Sports;
