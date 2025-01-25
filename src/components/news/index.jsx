import React, { useState, useEffect } from "react";
import "./main.scss";

const News = () => {
  const messages = [
    "Bem-vindo à nossa página! Novidades emocionantes estão chegando em breve.",
    "Confira nossas promoções especiais! Aproveite enquanto durarem!",
    "Inscreva-se agora para receber atualizações exclusivas e ofertas especiais!",
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [isVisible, setIsVisible] = useState(true);
  const [fade, setFade] = useState(false); // Controle do efeito de fade
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Adiciona o fade-out
      setFade(true);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setFade(false); // Adiciona o fade-in
      }, 500); // Tempo de fade-out (deve coincidir com a animação CSS)
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  useEffect(() => {
    setCurrentMessage(messages[currentIndex]);
  }, [currentIndex, messages]);

  const closeNotification = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="notification-news" id="notificationNews">
      <span className={`notification-text ${fade ? "fade" : ""}`}>
        {currentMessage}
      </span>

      <button className="close-btn" onClick={closeNotification}>
        <img src="src/assets/black-icon.png" alt="Close" />
      </button>
    </div>
  );
};

export default News;
