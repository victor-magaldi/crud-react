import React from "react";
import Header from "./Header";

import "./Main.css";

const Main = (props) => {
  return (
    <>
      <Header {...props}> </Header>
      <main className="main container-fluid">
        <div className="p-3 mt-3">{props.children}</div>
      </main>
    </>
  );
};

export default Main;
