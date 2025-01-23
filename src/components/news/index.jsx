import React from "react";
import "./main.scss";

const News = () => {
  const notificationText = document.getElementById("notificationText");

  const messages = [
    "Bem-vindo à nossa página! Novidades emocionantes estão chegando em breve.",
    "Confira nossas promoções especiais! Aproveite enquanto durarem!",
    "Inscreva-se agora para receber atualizações exclusivas e ofertas especiais!",
  ];

  let currentIndex = 0;

  function closeNotification() {
    const notificationNews = document.getElementById("notificationNews");
    notificationNews.style.display = "none";
  }

  function updateNotification() {
    currentIndex = (currentIndex + 1) % messages.length;
    notificationText.style.opacity = 0;
    setTimeout(() => {
      notificationText.textContent = messages[currentIndex];
      notificationText.style.opacity = 1;
    }, 500);
  }

  setInterval(updateNotification, 10000);

  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("bg-whitee");
    } else {
      navbar.classList.remove("bg-whitee");
      navbar.classList.add("bg-transparent");
    }
  });
  return (
    <div class="notification-news" id="notificationNews">
      <span class="notification-text" id="notificationText">
        Bem-vindo à nossa página! Novidades emocionantes chegando em breve.
      </span>
      <img class="news-tag-img" src="assets/img/pixelcut-export.png" alt="" />
      <button class="close-btn" onclick="closeNotification()">
        <img csrc="src\assets\black-icon.png" alt="" />
      </button>
    </div>
  );
};

export default News;
