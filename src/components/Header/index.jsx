import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.scss";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={`p-3 header-bg-color bg-transparent ${
        isSticky ? "sticky" : ""
      }`}
      id="navbar"
    >
      <div>
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/home" className="nav-link px-2 text-secondary">
                <img
                  className="main-logo-nav"
                  src="src/assets/black-icon.png"
                  alt=""
                />
              </Link>
            </li>
            <li className="header-content">
              <Link
                to="/release"
                className="nav-link px-2"
                onClick={handleScrollToTop}
              >
                Lançamentos
              </Link>
            </li>
            <li className="header-content dropdown">
              <Link
                to="/male"
                className="nav-link px-2"
                onClick={handleScrollToTop}
              >
                Masculino
              </Link>
              <div className="dropdown-content">
                <Link to="/male/shirts">Camisetas</Link>
                <Link to="/male/pants">Calças</Link>
                <Link to="/male/shoes">Acessórios</Link>
              </div>
            </li>
            <li className="header-content dropdown">
              <Link
                to="/female"
                className="nav-link px-2"
                onClick={handleScrollToTop}
              >
                Feminino
              </Link>
              <div className="dropdown-content">
                <Link to="/female/dresses">Conjuntos</Link>
                <Link to="/female/tops">Blusas</Link>
                <Link to="/female/accessories">Acessórios</Link>
              </div>
            </li>
            <li className="header-content dropdown">
              <Link
                to="/sports"
                className="nav-link px-2"
                onClick={handleScrollToTop}
              >
                Esportes
              </Link>
              <div className="dropdown-content">
                <Link to="/sports/shoes">Masculino</Link>
                <Link to="/sports/clothing">Feminino</Link>
                <Link to="/sports/equipment">Acessórios</Link>
              </div>
            </li>
            <li className="header-content dropdown">
              <Link
                to="/childrens"
                className="nav-link px-2"
                onClick={handleScrollToTop}
              >
                Infantil
              </Link>
              <div className="dropdown-content">
                <Link to="/childrens/toys">Acessórios</Link>
                <Link to="/childrens/clothing">Roupas</Link>
                <Link to="/childrens/shoes">Esportes</Link>
              </div>
            </li>
            <li className="header-content">
              <Link
                to="/offers"
                className="nav-link px-2"
                onClick={handleScrollToTop}
              >
                Ofertas
              </Link>
            </li>

            <div className="text-end">
              <input
                className=" header-content"
                placeholder="Pesquisar"
              ></input>
              <button type="button" className="btn fav-btn header-content">
                <i className="bi bi-heart"></i>
              </button>
              <button type="button" className="btn signin-btn header-content">
                <i className="bi bi-person-circle"></i>
              </button>
              <button type="button" className="btn signup-btn header-content">
                <i className="bi bi-bag"></i>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
