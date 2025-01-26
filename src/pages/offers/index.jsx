import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./main.scss";

const Offers = () => {
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  const toggleFilterSidebar = () => {
    setIsFilterSidebarOpen(!isFilterSidebarOpen);
  };

  return (
    <div className="container-fluid py-5 bg-body-tertiary">
      <div className="banner">
        <img
          src="src/assets/bc-offer-banner-1.png"
          alt="Promoção Especial"
          className="banner-img"
        />
        <div className="banner-text">
          <h2>Promoção Imperdível!</h2>
          <p>Descontos especiais em todos os produtos. Aproveite agora!</p>
        </div>
      </div>

      <div className="d-flex content-products-tittle">
        <div className="d-flex">
          <h2>
            Roupas e acessórios em Ofertas<span> (234)</span>
          </h2>
        </div>
        <div>
          <button onClick={toggleFilterSidebar} className="filter-btn">
            Filtrar <i className="bi bi-filter-left"></i>
          </button>
          <button className="order-cont-btn">
            Ordenar <i className="bi bi-caret-down"></i>
          </button>
          <button className="share-cont-btn">
            Compartilhar <i className="bi bi-share"></i>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="filter-panel">
            <h4>Filtros</h4>
            <div className="filter-section">
              <h5>Preço</h5>
              <ul className="keep-on">
                <li>
                  <input type="checkbox" /> Até R$ 100
                </li>
                <li>
                  <input type="checkbox" /> De R$ 100 à R$ 200
                </li>
                <li>
                  <input type="checkbox" /> De R$ 200 à R$ 300
                </li>
                <li>
                  <input type="checkbox" /> De R$ 300 à R$ 400
                </li>
                <li>
                  <input type="checkbox" /> De R$ 400 à R$ 500
                </li>
                <li>
                  <input type="checkbox" /> Acima de R$ 500
                </li>
              </ul>
            </div>
            <div className="filter-section">
              <h5>Cores</h5>
              <ul className="filter-colors">
                <li>
                  <button className="btn-color color-black">Preta</button>
                </li>
                <li>
                  <button className="btn-color color-white">Branca</button>
                </li>
                <li>
                  <button className="btn-color color-gray">Cinza</button>
                </li>
                <li>
                  <button className="btn-color color-bege">Bege</button>
                </li>
                <li>
                  <button className="btn-color color-yellow">Amarela</button>
                </li>
                <li>
                  <button className="btn-color color-blue">Azul</button>
                </li>
                <li>
                  <button className="btn-color color-green">Verde</button>
                </li>
                <li>
                  <button className="btn-color color-red">Vermelha</button>
                </li>
                <li>
                  <button className="btn-color color-pink">Rosa</button>
                </li>
                <li>
                  <button className="btn-color color-purple">Roxo</button>
                </li>
                <li>
                  <button className="btn-color color-brown">Marrom</button>
                </li>
                <li>
                  <button className="btn-color color-multi">Multi</button>
                </li>
              </ul>
            </div>
            <div className="filter-section">
              <h5>Tamanho</h5>
              <ul className="filter-sizes">
                <li>
                  <button>2PP</button>
                </li>
                <li>
                  <button>PP</button>
                </li>
                <li>
                  <button>P</button>
                </li>
                <li>
                  <button>M</button>
                </li>
                <li>
                  <button>G</button>
                </li>
                <li>
                  <button>GG</button>
                </li>
                <li>
                  <button>2GG</button>
                </li>
                <li>
                  <button>3GG</button>
                </li>
                <li>
                  <button>XXL</button>
                </li>
              </ul>
            </div>
            <div className="filter-section">
              <h5>Gênero</h5>
              <ul className="keep-on">
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
              <ul className="keep-on">
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
              <ul className="keep-on">
                <li>
                  <input type="checkbox" /> Em Oferta
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-9 col-size-products">
          <div className="album">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {/* Card 1 */}
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div class="card shadow-sm">
                      <img
                        src="src\assets\shirt-w.jpeg"
                        class="card-img-top"
                        alt="Camiseta T-Shirt Basica Blacat Oversized"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Camiseta T-Shirt Básica Oversized
                        </h5>
                        <div class="tags">
                          <span class="tag">Casual</span>

                          <span class="tag">Unissex</span>
                        </div>
                        <div class="pricing-info">
                          <span class="price">R$100,00</span>
                          <span class="discount">+10% OFF no Pix</span>
                        </div>

                        <button type="button" class="btn btn-primary btn-buy">
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div class="card shadow-sm">
                      <img
                        src="src\assets\shirt-w.jpeg"
                        class="card-img-top"
                        alt="Camiseta T-Shirt Basica Blacat Oversized"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Camiseta T-Shirt Básica Oversized
                        </h5>
                        <div class="tags">
                          <span class="tag">Casual</span>

                          <span class="tag">Unissex</span>
                        </div>
                        <div class="pricing-info">
                          <span class="price">R$100,00</span>
                          <span class="discount">+10% OFF no Pix</span>
                        </div>

                        <button type="button" class="btn btn-primary btn-buy">
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div class="card shadow-sm">
                      <img
                        src="src\assets\shirt-w.jpeg"
                        class="card-img-top"
                        alt="Camiseta T-Shirt Basica Blacat Oversized"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Camiseta T-Shirt Básica Oversized
                        </h5>
                        <div class="tags">
                          <span class="tag">Casual</span>

                          <span class="tag">Unissex</span>
                        </div>
                        <div class="pricing-info">
                          <span class="price">R$100,00</span>
                          <span class="discount">+10% OFF no Pix</span>
                        </div>

                        <button type="button" class="btn btn-primary btn-buy">
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div class="card shadow-sm">
                      <img
                        src="src\assets\shirt-w.jpeg"
                        class="card-img-top"
                        alt="Camiseta T-Shirt Basica Blacat Oversized"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Camiseta T-Shirt Básica Oversized
                        </h5>
                        <div class="tags">
                          <span class="tag">Casual</span>

                          <span class="tag">Unissex</span>
                        </div>
                        <div class="pricing-info">
                          <span class="price">R$100,00</span>
                          <span class="discount">+10% OFF no Pix</span>
                        </div>

                        <button type="button" class="btn btn-primary btn-buy">
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div class="card shadow-sm">
                      <img
                        src="src\assets\shirt-w.jpeg"
                        class="card-img-top"
                        alt="Camiseta T-Shirt Basica Blacat Oversized"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Camiseta T-Shirt Básica Oversized
                        </h5>
                        <div class="tags">
                          <span class="tag">Casual</span>

                          <span class="tag">Unissex</span>
                        </div>
                        <div class="pricing-info">
                          <span class="price">R$100,00</span>
                          <span class="discount">+10% OFF no Pix</span>
                        </div>

                        <button type="button" class="btn btn-primary btn-buy">
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="col">
                  <Link to="/product-details" className="text-decoration-none">
                    <div class="card shadow-sm">
                      <img
                        src="src\assets\shirt-w.jpeg"
                        class="card-img-top"
                        alt="Camiseta T-Shirt Basica Blacat Oversized"
                      />
                      <div class="card-body">
                        <h5 class="card-title">
                          Camiseta T-Shirt Básica Oversized
                        </h5>
                        <div class="tags">
                          <span class="tag">Casual</span>

                          <span class="tag">Unissex</span>
                        </div>
                        <div class="pricing-info">
                          <span class="price">R$100,00</span>
                          <span class="discount">+10% OFF no Pix</span>
                        </div>

                        <button type="button" class="btn btn-primary btn-buy">
                          Adicionar ao Carrinho
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Filter Sidebar */}
      <div className={`filter-sidebar ${isFilterSidebarOpen ? "open" : ""}`}>
        <button onClick={toggleFilterSidebar} className="close-btn">
          <i className="bi bi-x"></i>
        </button>
        <div className="filter-panel-side">
          <h4>Filtros</h4>
          <div className="filter-section">
            <h5>Ordenar por</h5>
            <ul className="keep-on">
              <li>
                <input type="checkbox" /> Relevância
              </li>
              <li>
                <input type="checkbox" /> Lançamentos
              </li>
              <li>
                <input type="checkbox" /> Maior desconto
              </li>
              <li>
                <input type="checkbox" /> Menor preço
              </li>
            </ul>
          </div>
          <div className="filter-section">
            <h5>Preço</h5>
            <ul className="keep-on">
              <li>
                <input type="checkbox" /> Até R$ 100
              </li>
              <li>
                <input type="checkbox" /> De R$ 100 à R$ 200
              </li>
              <li>
                <input type="checkbox" /> De R$ 200 à R$ 300
              </li>
              <li>
                <input type="checkbox" /> De R$ 300 à R$ 400
              </li>
              <li>
                <input type="checkbox" /> De R$ 400 à R$ 500
              </li>
              <li>
                <input type="checkbox" /> Acima de R$ 500
              </li>
            </ul>
          </div>
          <div className="filter-section ">
            <h5>Cores</h5>
            <ul className="filter-colors btn-side-color">
              <li>
                <button className="btn-color color-black "></button>
              </li>
              <li>
                <button className="btn-color color-white"></button>
              </li>
              <li>
                <button className="btn-color color-gray"></button>
              </li>
              <li>
                <button className="btn-color color-bege"></button>
              </li>
              <li>
                <button className="btn-color color-yellow"></button>
              </li>
              <li>
                <button className="btn-color color-blue"></button>
              </li>
              <li>
                <button className="btn-color color-green"></button>
              </li>
              <li>
                <button className="btn-color color-red"></button>
              </li>
              <li>
                <button className="btn-color color-pink"></button>
              </li>
              <li>
                <button className="btn-color color-purple"></button>
              </li>
              <li>
                <button className="btn-color color-brown"></button>
              </li>
              <li>
                <button className="btn-color color-multi"></button>
              </li>
            </ul>
          </div>
          <div className="filter-section">
            <h5>Tamanho</h5>
            <ul className="filter-sizes">
              <li>
                <button>2PP</button>
              </li>
              <li>
                <button>PP</button>
              </li>
              <li>
                <button>P</button>
              </li>
              <li>
                <button>M</button>
              </li>
              <li>
                <button>G</button>
              </li>
              <li>
                <button>GG</button>
              </li>
              <li>
                <button>2GG</button>
              </li>
              <li>
                <button>3GG</button>
              </li>
              <li>
                <button>XXL</button>
              </li>
            </ul>
          </div>
          <div className="filter-section">
            <h5>Gênero</h5>
            <ul className="keep-on">
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
            <ul className="keep-on">
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
            <ul className="keep-on">
              <li>
                <input type="checkbox" /> Em Oferta
              </li>
            </ul>
            <p className="inv-word">a</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
