import React, { useState } from "react";
import "./swiper.scss";

const Swiper = () => {
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
  </div>;
};
export default Swiper;
