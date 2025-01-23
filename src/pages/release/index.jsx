import React from "react";
import "./main.scss";

const Release = () => {
  return (
    <div>
      {/* Banner de StreetWear 2025 */}
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

      {/* Banner de Roupas de Treino */}
      <div className="banner">
        <img
          src="src\assets\release-1.png" // Substitua pelo caminho correto da imagem do novo banner
          alt="Promoção Especial Roupas de Treino"
          className="banner-img-train"
        />
        <div className="banner-text-right">
          <h2>Coleção Roupas de Treino 2025!</h2>
          <p>
            Explore a nossa nova linha de roupas de treino, criadas para
            proporcionar máximo conforto e performance. Oferecemos peças de alta
            tecnologia que acompanham o seu ritmo, ideais para todas as
            atividades físicas. Aproveite descontos exclusivos e leve sua
            performance a outro nível!
          </p>
          <button className="colection-btn">Ver Coleção</button>
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
    </div>
  );
};

export default Release;
