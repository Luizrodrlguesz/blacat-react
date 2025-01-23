import React from "react";
import { Link } from "react-router-dom";

const Childrens = () => {
  return (
    <div className="container-fluid  bg-body-tertiary">
      {/* Banner */}

      <div className="banner">
        <img
          src="src\assets\childrens-b.png"
          alt="Promoção Especial StreetWear"
          className="banner-img-woman"
        />
        <div className="banner-text">
          <h2>Volta as aulas 2025!</h2>
          <p>
            Desfrute de descontos imperdíveis na nossa nova coleção de roupas
            StreetWear. Estilos exclusivos, qualidade premium e preço acessível.
            Não perca a chance de renovar seu guarda-roupa com os melhores
            looks!
          </p>
          <button className="colection-btn">Ver Coleção</button>
        </div>
      </div>

      {/* Filtro e Conteúdo Principal */}
      <div className="row">
        {/* Filtro Lateral */}
        <div className="col-3">
          <div className="filter-panel">
            <h4>Filtros</h4>

            {/* Filtro por Preço */}
            <div className="filter-section">
              <h5>Preço</h5>
              <input type="range" min="0" max="500" />
              <span>0 - 500</span>
            </div>

            {/* Filtro por Cor */}
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

            {/* Filtro por Tamanho */}
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

            {/* Filtro por Gênero */}
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

            {/* Filtro por Tipo de Produto */}
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
                  <input type="checkbox" /> Acessórios
                </li>
              </ul>
            </div>

            {/* Filtro por Oferta */}
            <div className="filter-section">
              <h5>Ofertas</h5>
              <input type="checkbox" /> Em Oferta
            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
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
                {/* Adicione mais cards conforme necessário */}
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

export default Childrens;
