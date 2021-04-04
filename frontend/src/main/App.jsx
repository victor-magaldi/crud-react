import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "font-awesome/css/font-awesome.min.css";

import Footer from "../components/templates/Footer";
import Logo from "../components/templates/Logo";
import Main from "../components/templates/Main";
import Nav from "../components/templates/Nav";

const app = () => {
  return (
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Main icon="home" title="inicio" subtitle="Desenvolvimento Crud React " />
      <Footer></Footer>
    </div>
  );
};

export default app;
