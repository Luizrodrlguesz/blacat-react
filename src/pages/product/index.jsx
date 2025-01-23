import React, { useState } from "react";
import "./main.scss";

const Product = () => {
  const [rating, setRating] = useState(4); // Avaliação padrão (4 de 5)

  const relatedProducts = [
    {
      img: "src/assets/shirt-b.webp",
      name: "Camiseta Esportiva DryFit",
      price: "R$120,00",
    },
    {
      img: "src/assets/shirt-r.webp",
      name: "Camiseta Casual Listrada",
      price: "R$80,00",
    },
    {
      img: "src/assets/shirt-b.webp",
      name: "Camiseta Básica Preta",
      price: "R$90,00",
    },
    {
      img: "src/assets/shirt-r.webp",
      name: "Regata Fitness Branca",
      price: "R$70,00",
    },
    {
      img: "src/assets/shirt-b.webp",
      name: "Camiseta Polo Clássica",
      price: "R$150,00",
    },
  ];

  return (
    <div className="product-details-container">
      {/* Seção do Produto */}
      <div className="product-main">
        <div className="product-images">
          <img
            src="src/assets/shirt-w.jpeg"
            alt="Produto Principal"
            className="main-image"
          />
          <div className="thumbnail-images">
            <img src="src/assets/shirt-w.jpeg" alt="Imagem 1" />
            <img src="src/assets/shirt-w.jpeg" alt="Imagem 2" />
            <img src="src/assets/shirt-w.jpeg" alt="Imagem 3" />
          </div>
        </div>

        <div className="product-info">
          <button className="share-btn">
            <i className="bi bi-share-fill"></i>
          </button>
          <h3 className="subtitle">
            <span>Masculino</span> <span> - </span>
            Casual
          </h3>

          <h1>Camiseta T-Shirt Basica Oversized </h1>

          <p className="price">
            <span className="old-price">R$120,00</span> R$100,00 no Pix{" "}
            <span className="promo-color">35% off</span>
          </p>
          <p>
            ou R$ 109,99 em até 3x sem juros{" "}
            <span className="promo-color">32% off</span>
          </p>

          {/* Avaliação com Estrelas */}
          <div className="rating">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className={`bi bi-star${star <= rating ? "-fill" : ""}`}
                style={{ color: star <= rating ? "#d6bebe" : "#CCC" }}
                onClick={() => setRating(star)}
              ></i>
            ))}
            <small>({rating}.0 avaliações)</small>
          </div>

          <p className="description">
            Uma camiseta básica e confortável, ideal para o dia a dia. Feita com
            material 100% algodão, garantindo qualidade e estilo.
          </p>

          {/* Opções de Cores */}
          <div className="product-options">
            <h4>Cores Disponíveis:</h4>
            <div className="color-options">
              <div className="color-item">
                <a href="#">
                  <img
                    className="color-item"
                    src="src\assets\shirt-w.jpeg"
                    alt=""
                  />
                </a>
              </div>
              <div className="color-item">
                <a href="#">
                  <img
                    className="color-item"
                    src="src\assets\shirt-r.webp"
                    alt=""
                  />
                </a>
              </div>
              <div className="color-item">
                <a href="#">
                  <img
                    className="color-item"
                    src="src\assets\shirt-b.webp"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Opções de Tamanhos */}
          <div className="product-options">
            <h4>Tamanhos Disponíveis:</h4>
            <div className="size-options">
              <button className="size-btn">P</button>
              <button className="size-btn">M</button>
              <button className="size-btn">G</button>
              <button className="size-btn">GG</button>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="action-buttons">
            <div>
              <button className="add-to-cart-btn">
                Adicionar ao Carrinho{" "}
                <i className="bi bi-cart2 icon-btn-add"></i>
              </button>
            </div>

            <button className="add-to-favorites-btn">
              Adicionar aos Favoritos{" "}
              <i className="bi bi-heart icon-btn-add"></i>
            </button>
          </div>

          {/* Descrição de Marketing */}
          <p className="marketing-description">
            Aproveite o conforto e o estilo único desta camiseta. Perfeita para
            ocasiões casuais e ideal para combinar com qualquer look do seu dia
            a dia.
          </p>
        </div>
      </div>

      {/* Seção de Produtos Relacionados */}
      <div className="related-products">
        <h2>Modelos que você talvez goste</h2>
        <div className="related-grid">
          {relatedProducts.map((product, index) => (
            <div className="related-card" key={index}>
              <img src={product.img} alt={`Produto Relacionado ${index + 1}`} />
              <p>{product.name}</p>
              <p className="price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
