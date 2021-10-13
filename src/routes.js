import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login/Login";

function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={AppMountPoint} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/login-help" component={Help} /> 
        {/* <Route></Route>
        <Route></Route>
        <Redirect></Redirect> */}
      </Switch>
    </Router>
  );
}

const AppMountPoint = ()=> {

  return <div>AppMountPoint</div>
}

const Help = ()=> {

  return <div>help</div>
}


export default Routes;
