import React from "react";
import Main from "../templates/Main";

const Home = () => {
  return (
    <Main icon="home" title="inicio" subtitle="Desenvolvimento Crud React ">
      <div className="display-1">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a Construção de um cadastro em react
      </p>
    </Main>
  );
};

export default Home;
