import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home, Login, Logout, Browse, YourAccount, Error } from "./pages/index";
 import { Registration, Regform } from "./pages/signup/index"
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup/registration" exact component={Registration}/>
        <Route path="/signup/regform" exact component={Regform}/>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/browse" component={Browse} />
        <Route path="/YourAccount" component={YourAccount} />
        <Route path="/login-help" component={Help} />
        <Route path="/*" component={Error} />
        {/* <Route></Route>
        <Route></Route>
        <Redirect></Redirect> */}
      </Switch>
    </Router>
  );
}

const Help = () => {
  return <div>help</div>;
};

export default Routes;
