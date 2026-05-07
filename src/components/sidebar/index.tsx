import React, { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen((current) => !current);

  return (
    <div>
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
    </div>
  );
};

export default Sidebar;
