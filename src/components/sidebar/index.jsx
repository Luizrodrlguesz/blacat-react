import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.scss";

const Sidebar = () => {
  return (
    <div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          &times;
        </button>
        <ul className="sidebar-links">
          <li>
            <Link to="/release" onClick={toggleSidebar}>
              Lançamentos
            </Link>
          </li>
          <li>
            <Link to="/male" onClick={toggleSidebar}>
              Masculino
            </Link>
          </li>
          <li>
            <Link to="/female" onClick={toggleSidebar}>
              Feminino
            </Link>
          </li>
          <li>
            <Link to="/sports" onClick={toggleSidebar}>
              Esportes
            </Link>
          </li>
          <li>
            <Link to="/childrens" onClick={toggleSidebar}>
              Infantil
            </Link>
          </li>
          <li>
            <Link to="/offers" onClick={toggleSidebar}>
              Ofertas
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
