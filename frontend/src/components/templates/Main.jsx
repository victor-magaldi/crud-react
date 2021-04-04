import React from "react";
import Header from "./Header";

const Main = (props) => {
  return (
    <>
      <Header {...props}> header</Header>
      <main className="main">main</main>
    </>
  );
};

export default Main;
