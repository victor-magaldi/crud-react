import React, { useState } from "react";
import axios from "axios";
import Main from "../templates/Main";

const headerProps = {
  icon: "user",
  title: "usuários",
  subtitle: "cadastro de usuários",
};
const baseUrl = "http://localhost:3001/users";
const initialState = { user: { name: "", email: "" }, list: [] };

function User() {
  const [objUser, setUser] = useState(initialState);
  React.useEffect(() => {
    // Your code here
  }, []);
  function clear() {
    setUser(initialState);
  }
  function save() {
    const user = objUser.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;

    function getUpdateList(user) {
      const list = objUser.list.filter((item) => item.id !== user.id);
      list.unshift(user);
      return list;
    }
    axios[method](url, user).then((resp) => {
      const list = getUpdateList(resp.data);
      const stateUser = { user: user, list: list };
      setUser(stateUser);
    });
  }
  return <Main {...headerProps}>Cadastro de Usuário</Main>;
}

export default User;
