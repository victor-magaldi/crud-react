import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/Home/Home";
import User from "../components/User/User";

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/users" component={User}></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  );
}
