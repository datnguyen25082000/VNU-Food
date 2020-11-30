import React, { Component, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import RouteWithSubRoutes from "../../../RouteWithSubRoutes";


class Coffee extends Component {

  render() {
    return (
      <div>
        <h2>Coffee</h2>
        <ul>
          <li>
            <Link to="/coffee/coffee1">Coffee1</Link>
          </li>
          <li>
            <Link to="/coffee/coffee2">Coffee2</Link>
          </li>
        </ul>

        <Switch>
          {this.props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default Coffee;