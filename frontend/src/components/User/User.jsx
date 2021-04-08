import React from "react";
import Main from "../templates/Main";

// const headerProps = {
//   icon: "user",
//   title: "usuários",
//   subtitle: "cadastro de usuários",
// };
const User = () => {
  React.useEffect(() => {
    // Your code here
  }, []);
  return (
    <Main icon="home" title="inicio" subtitle="Desenvolvimento Crud React ">
      <div className="display-1">Cadastro!</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a Construção de um cadastro em react
      </p>
    </Main>
  );
};

export default User;
