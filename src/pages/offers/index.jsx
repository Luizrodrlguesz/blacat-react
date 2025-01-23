import React from "react";
import { Link } from "react-router-dom";
import "./main.scss";

const Offers = () => {
  return (
    <div className="container-fluid py-5 bg-body-tertiary">
      <div className="banner">
        <img
          src="src\assets\bc-offer-banner-1.png"
          alt="Promoção Especial"
          className="banner-img"
        />
        <div className="banner-text">
          <h2>Promoção Imperdível!</h2>
          <p>Descontos especiais em todos os produtos. Aproveite agora!</p>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="filter-panel">
            <h4>Filtros</h4>
            <div className="filter-section">
              <h5>Preço</h5>
              <input type="range" min="0" max="500" />
              <span>0 - 500</span>
            </div>
            <div className="filter-section">
              <h5>Cores</h5>
              <ul>
                <li>
                  <input type="checkbox" /> Preto
                </li>
                <li>
                  <input type="checkbox" /> Branco
                </li>
                <li>
                  <input type="checkbox" /> Azul
                </li>
                <li>
                  <input type="checkbox" /> Vermelho
                </li>
                <li>
                  <input type="checkbox" /> Verde
                </li>
              </ul>
            </div>
            <div className="filter-section">
              <h5>Tamanho</h5>
              <ul>
                <li>
                  <input type="checkbox" /> P
                </li>
                <li>
                  <input type="checkbox" /> M
                </li>
                <li>
                  <input type="checkbox" /> G
                </li>
                <li>
                  <input type="checkbox" /> GG
                </li>
              </ul>
            </div>
            <div className="filter-section">
              <h5>Gênero</h5>
              <ul>
                <li>
                  <input type="checkbox" /> Masculino
                </li>
                <li>
                  <input type="checkbox" /> Feminino
                </li>
                <li>
                  <input type="checkbox" /> Unissex
                </li>
              </ul>
            </div>

            <div className="filter-section">
              <h5>Tipo de Produto</h5>
              <ul>
                <li>
                  <input type="checkbox" /> Casual
                </li>
                <li>
                  <input type="checkbox" /> Esportivo
                </li>
                <li>
                  <input type="checkbox" /> Infantil
                </li>
              </ul>
            </div>

            <div className="filter-section">
              <h5>Ofertas</h5>
              <input type="checkbox" /> Em Oferta
            </div>
          </div>
        </div>

        <div className="col-9">
          <div className="album">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {/* Card 1 */}
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div className="card shadow-sm">
                      <img
                        src="src/assets/shirt-w.jpeg"
                        className="card-img-top"
                        alt="Card Thumbnail"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Camiseta T-Shirt Básica Blacat Oversized
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Casual
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              +10% OFF NO CARRINHO
                            </button>
                          </div>
                          <small className="text-body-secondary">
                            R$100,00 no Pix
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div className="card shadow-sm">
                      <img
                        src="src/assets/shirt-w.jpeg"
                        className="card-img-top"
                        alt="Card Thumbnail"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Camiseta T-Shirt Básica Blacat Oversized
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Casual
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              +10% OFF NO CARRINHO
                            </button>
                          </div>
                          <small className="text-body-secondary">
                            R$100,00 no Pix
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div className="card shadow-sm">
                      <img
                        src="src/assets/shirt-w.jpeg"
                        className="card-img-top"
                        alt="Card Thumbnail"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Camiseta T-Shirt Básica Blacat Oversized
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Casual
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              +10% OFF NO CARRINHO
                            </button>
                          </div>
                          <small className="text-body-secondary">
                            R$100,00 no Pix
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div className="card shadow-sm">
                      <img
                        src="src/assets/shirt-w.jpeg"
                        className="card-img-top"
                        alt="Card Thumbnail"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Camiseta T-Shirt Básica Blacat Oversized
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Casual
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              +10% OFF NO CARRINHO
                            </button>
                          </div>
                          <small className="text-body-secondary">
                            R$100,00 no Pix
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div className="card shadow-sm">
                      <img
                        src="src/assets/shirt-w.jpeg"
                        className="card-img-top"
                        alt="Card Thumbnail"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Camiseta T-Shirt Básica Blacat Oversized
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Casual
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              +10% OFF NO CARRINHO
                            </button>
                          </div>
                          <small className="text-body-secondary">
                            R$100,00 no Pix
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div className="card shadow-sm">
                      <img
                        src="src/assets/shirt-w.jpeg"
                        className="card-img-top"
                        alt="Card Thumbnail"
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Camiseta T-Shirt Básica Blacat Oversized
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Casual
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              +10% OFF NO CARRINHO
                            </button>
                          </div>
                          <small className="text-body-secondary">
                            R$100,00 no Pix
                          </small>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
