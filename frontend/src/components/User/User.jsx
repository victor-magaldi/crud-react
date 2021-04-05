import React from "react";
import Main from "../templates/Main";

const headerProps = {
  icon: "user",
  title: "usuários",
  subtitle: "cadastro de usuários",
};
const User = () => {
  React.useEffect(() => {
    // Your code here
  }, []);
  return (
    <div>
      <Main {...headerProps}> Cadastro de Usuário</Main>
    </div>
  );
};

export default User;
