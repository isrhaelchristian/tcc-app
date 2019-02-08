import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Container from "../../pages/Container";
import Home from "../../pages/Home";
import './styles.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/"} exact component={Home} />
        <Route path={"/login"} exact component={Container} />
      </Switch>
    );
  }
}

export default App;
