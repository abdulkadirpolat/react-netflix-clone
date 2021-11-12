import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home, Login, Logout, Browse, Error } from "./pages/index";
import { Registration, Regform } from "./pages/signup/index";

import { useSelector } from "react-redux";
function Routes() {
  const userSelector = useSelector((state) => state.user.user);
  const [user, setUser] = useState(userSelector || null);
  useEffect(() => {
 setUser(userSelector);
  }, [userSelector]);
 
  return (
    <Router>
      {user && <Redirect to="/browse" />}
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/login" exact component={Login} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/signup/registration" exact component={Registration} />
        <Route path="/signup/regform" exact component={Regform} />
        {!user && <Route path="/*" exact component={Error} />}

        {user ? (
          <Route path="/browse" exact component={Browse} />
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
    </Router>
  );
}

export default Routes;
