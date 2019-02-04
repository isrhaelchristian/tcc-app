import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../../pages/Login";
import Container from "../../pages/Container";
import './styles.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/"} exact component={Login} />
        <Route path={"/spring"} exact component={Container} />
      </Switch>
    );
  }
}

export default App;
