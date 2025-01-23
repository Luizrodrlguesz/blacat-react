import React from "react";
import "./main.scss";

const Error = () => {
  return (
    <div class="container">
      <img src="" alt="" />
      <div class="title">Página Não Encontrada</div>
      <div class="message">
        Desculpe, mas a página que você está procurando não existe ou foi
        movida.
      </div>
      <a href="/" class="button">
        Voltar para a Página Inicial
      </a>
    </div>
  );
};

export default Error;
