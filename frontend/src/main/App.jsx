import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import Footer from "../components/templates/Footer";
import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";
import Home from "../components/Home/Home";

const app = () => {
  return (
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default app;
