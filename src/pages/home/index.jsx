import React, { useState } from "react";
import "./main.scss";

const Home = () => {
  const [showControls, setShowControls] = useState(false);

  const [rating, setRating] = useState(4);
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
    <div>
      <div>
        <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 class="display-4 fw-normal text-body-emphasis">Blacat.co</h1>
          <p class="fs-5 text-body-secondary">
            O lugar aonde junta seu estilo e conforto para seus dias mais
            tranquilos e tambem para aqueles que ritmo intenso.
          </p>
        </div>
      </div>
      <div className=" video-container">
        <video
          width="640"
          height="360"
          autoPlay
          loop
          muted
          style={{ pointerEvents: "none" }}
          controls={showControls}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <source src="src\assets\blacat-short-v.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <div className="row row-cols-1 row-cols-sm-2 video-message">
          <div className="col">
            <p> </p>
          </div>
          <div className="col video-text-marketing">
            <h3 className="animate-text" style={{ animationDelay: "0s" }}>
              7 lives and
            </h3>
            <h3 className="animate-text" style={{ animationDelay: "2s" }}>
              Each one has
            </h3>
            <h3 className="animate-text" style={{ animationDelay: "4s" }}>
              7 ways to live
            </h3>
          </div>
        </div>
      </div>
      <div class="container">
        <p></p>
      </div>
      <div className="banner">
        <img
          src="src/assets/offer-1.png"
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

      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\shirt-w.jpeg"
                class="card-img-top"
                alt="Card Thumbnail"
              />
              <div class="card-body">
                <p class="card-text">
                  Camiseta T-Shirt Basica Blacat Oversized Branca
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Casual
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      +10% OFF NO CARRINHO
                    </button>
                  </div>
                  <small class="text-body-secondary">R$100,00 no Pix</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\shirt-b.webp"
                class="card-img-top"
                alt="Card Thumbnail"
              />
              <div class="card-body">
                <p class="card-text">
                  Camiseta T-Shirt Basica Blacat Oversized Preta
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Casual
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      +10% OFF NO CARRINHO
                    </button>
                  </div>
                  <small class="text-body-secondary">R$100,00 no Pix</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\shirt-r.webp"
                class="card-img-top"
                alt="Card Thumbnail"
              />
              <div class="card-body">
                <p class="card-text">
                  Camiseta T-Shirt Basica Blacat Oversized Vermelha
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Casual
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      +10% OFF NO CARRINHO
                    </button>
                  </div>
                  <small class="text-body-secondary">R$100,00 no Pix</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p></p>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\shirt-b.webp"
                class="card-img-top"
                alt="Card Thumbnail"
              />
              <div class="card-body">
                <p class="card-text">
                  Camiseta T-Shirt Basica Blacat Oversized
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Casual
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      +10% OFF NO CARRINHO
                    </button>
                  </div>
                  <small class="text-body-secondary">R$100,00 no Pix</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\shirt-r.webp"
                class="card-img-top"
                alt="Card Thumbnail"
              />
              <div class="card-body">
                <p class="card-text">
                  Camiseta T-Shirt Basica Blacat Oversized
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Casual
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      +10% OFF NO CARRINHO
                    </button>
                  </div>
                  <small class="text-body-secondary">R$100,00 no Pix</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <img
                src="src\assets\shirt-w.jpeg"
                class="card-img-top"
                alt="Card Thumbnail"
              />
              <div class="card-body">
                <p class="card-text">
                  Camiseta T-Shirt Basica Blacat Oversized
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      Casual
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                    >
                      +10% OFF NO CARRINHO
                    </button>
                  </div>
                  <small class="text-body-secondary">R$100,00 no Pix</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="banner">
        <img
          src="src\assets\women-e1.png"
          alt="Promoção Especial"
          className="banner-img-woman"
        />
        <div className="banner-text">
          <h2>Promoção Imperdível!</h2>
          <p>Descontos especiais em todos os produtos. Aproveite agora!</p>
        </div>
      </div>

      <div className="container">
        <div className="related-products">
          <h2>Modelos que você talvez goste</h2>
          <div className="related-grid">
            {relatedProducts.map((product, index) => (
              <div className="related-card" key={index}>
                <img
                  src={product.img}
                  alt={`Produto Relacionado ${index + 1}`}
                />
                <p>{product.name}</p>
                <p className="price">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p class="mb-5 mt-5 ms-5 me-5 text-message-home">
        Os gatos são animais fascinantes, conhecidos por sua independência e
        elegância. Com sua capacidade de se adaptar a diversos ambientes, eles
        são excelentes companheiros para pessoas de todas as idades. Além de
        serem mestres na arte da caça, os gatos também são famosos por seus
        momentos de afeto e carinho, ronronando suavemente enquanto se aninham.
        Sua personalidade curiosa e brincalhona faz deles animais de estimação
        únicos, proporcionando alegria e diversão para seus donos. Cuidar de um
        gato é uma experiência recompensadora, pois eles sabem como transformar
        qualquer casa em um lar aconchegante e cheio de amor. Os gatos são
        animais fascinantes, conhecidos por sua independência e elegância. Com
        sua capacidade de se adaptar a diversos ambientes, eles são excelentes
        companheiros para pessoas de todas as idades. Além de serem mestres na
        arte da caça, os gatos também são famosos por seus momentos de afeto e
        carinho, ronronando suavemente enquanto se aninham. Sua personalidade
        curiosa e brincalhona faz deles animais de estimação únicos,
        proporcionando alegria e diversão para seus donos. Cuidar de um gato é
        uma experiência recompensadora, pois eles sabem como transformar
        qualquer casa em um lar aconchegante e cheio de amor.
      </p>
    </div>
  );
};

export default Home;
