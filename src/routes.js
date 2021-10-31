import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import { Home, Login, Logout, Browse, Error } from "./pages/index";
import { Registration, Regform } from "./pages/signup/index";
// import { useSelector } from "react-redux";
function Routes() {
  // const user = useSelector((state) => state.user.user);
  // console.log(user);
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/browse" exact component={Browse} />
        <Route path="/signup/registration" exact component={Registration} />
        <Route path="/signup/regform" exact component={Regform} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/*" exact component={Error} />
      </Switch>
    </Router>
  );
}

export default Routes;
