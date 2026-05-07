import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSignInClick = () => {
    router.push("/signin");
  };

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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <header
        className={`p-3 header-bg-color bg-transparent ${
          isSticky ? "sticky" : ""
        }`}
        id="navbar"
      >
        <div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li className="logo-header">
                <Link href="/home" className="nav-link px-2 text-secondary">
                  <img
                    className="main-logo-nav"
                    src="/assets/black-icon.png"
                    alt=""
                  />
                </Link>
              </li>
              <li className="header-content">
                <Link
                  href="/release"
                  className="nav-link px-2"
                  onClick={handleScrollToTop}
                >
                  Lançamentos
                </Link>
              </li>
              <li className="header-content dropdown">
                <Link
                  href="/male"
                  className="nav-link px-2"
                  onClick={handleScrollToTop}
                >
                  Masculino
                </Link>
                <div className="dropdown-content">
                  <Link href="/male/shirts">Camisetas</Link>
                  <Link href="/male/pants">Calças</Link>
                  <Link href="/male/shoes">Acessórios</Link>
                </div>
              </li>
              <li className="header-content dropdown">
                <Link
                  href="/female"
                  className="nav-link px-2"
                  onClick={handleScrollToTop}
                >
                  Feminino
                </Link>
                <div className="dropdown-content">
                  <Link href="/female/dresses">Conjuntos</Link>
                  <Link href="/female/tops">Blusas</Link>
                  <Link href="/female/accessories">Acessórios</Link>
                </div>
              </li>
              <li className="header-content dropdown">
                <Link
                  href="/sports"
                  className="nav-link px-2"
                  onClick={handleScrollToTop}
                >
                  Esportes
                </Link>
                <div className="dropdown-content">
                  <Link href="/sports/shoes">Masculino</Link>
                  <Link href="/sports/clothing">Feminino</Link>
                  <Link href="/sports/equipment">Acessórios</Link>
                </div>
              </li>
              <li className="header-content dropdown">
                <Link
                  href="/childrens"
                  className="nav-link px-2"
                  onClick={handleScrollToTop}
                >
                  Infantil
                </Link>
                <div className="dropdown-content">
                  <Link href="/childrens/toys">Acessórios</Link>
                  <Link href="/childrens/clothing">Roupas</Link>
                  <Link href="/childrens/shoes">Esportes</Link>
                </div>
              </li>
              <li className="header-content">
                <Link
                  href="/offers"
                  className="nav-link px-2"
                  onClick={handleScrollToTop}
                >
                  Ofertas
                </Link>
              </li>
              <div className="text-end">
                <input
                  className=" header-content header-search"
                  placeholder="Pesquisar"
                ></input>
                <button
                  className="search-btn header-content"
                  onClick={toggleModal}
                >
                  <i className="bi bi-search"></i>
                </button>
                <button type="button" className="btn fav-btn header-content">
                  <i className="bi bi-heart"></i>
                </button>
                <button
                  type="button"
                  className="btn signin-btn header-content"
                  onClick={handleSignInClick}
                >
                  <i className="bi bi-person-circle"></i>
                </button>
                <button type="button" className="btn signup-btn header-content">
                  <i className="bi bi-bag"></i>
                </button>
                <button
                  className="list-btn header-content"
                  onClick={toggleSidebar}
                >
                  <i className="bi bi-list"></i>
                </button>
              </div>
            </ul>
          </div>
        </div>
      </header>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-links">
          <li>
            <Link href="/release" onClick={toggleSidebar}>
              Lançamentos
            </Link>
          </li>
          <li>
            <Link href="/male" onClick={toggleSidebar}>
              Masculino
            </Link>
          </li>
          <li>
            <Link href="/female" onClick={toggleSidebar}>
              Feminino
            </Link>
          </li>
          <li>
            <Link href="/sports" onClick={toggleSidebar}>
              Esportes
            </Link>
          </li>
          <li>
            <Link href="/childrens" onClick={toggleSidebar}>
              Infantil
            </Link>
          </li>
          <li>
            <Link href="/offers" onClick={toggleSidebar}>
              Ofertas
            </Link>
          </li>
        </ul>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <input
              className="modal-search-input"
              type="text"
              placeholder="Digite sua pesquisa aqui..."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
