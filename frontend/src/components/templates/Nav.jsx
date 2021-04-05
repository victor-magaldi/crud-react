import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <a href="/#">
          <i className="fa fa-home"></i>Inicio
        </a>
        <a href="/#">
          <i className="fa fa-users"></i>Usuário
        </a>
      </nav>
    </aside>
  );
};

export default Nav;
