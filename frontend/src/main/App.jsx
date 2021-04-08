import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";

import Footer from "../components/templates/Footer";
import Logo from "../components/templates/Logo";
import Nav from "../components/templates/Nav";

import Routes from "./routes";

const app = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Logo />
        <Nav></Nav>
        <Routes />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default app;
