import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";

class DashboardRoutes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    );
  }
}

export default DashboardRoutes;
