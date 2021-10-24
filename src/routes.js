import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Login, Logout, Browse, YourAccount, Error } from "./pages/index";
 import { SignUp, Registration, Regform } from "./pages/signup/index"
function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AppMountPoint} />
        <Route path="/signup" exact component={SignUp}/>
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

const AppMountPoint = () => {
  return <div>AppMountPoint</div>;
};

const Help = () => {
  return <div>help</div>;
};

export default Routes;
