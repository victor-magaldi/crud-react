import React from "react";

import Footer from "../components/templates/Footer";
import Logo from "../components/templates/Logo";
import Main from "../components/templates/Main";
import Nav from "../components/templates/Nav";

const app = () => {
  return (
    <div className="app">
      <Logo></Logo>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default app;
