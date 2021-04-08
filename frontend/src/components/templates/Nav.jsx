import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        <Link to="/">
          <i className="fa fa-home"></i>Inicio
        </Link>

        <Link to="/users">
          <i className="fa fa-users"></i>Usuário
        </Link>
      </nav>
    </aside>
  );
};

export default Nav;
