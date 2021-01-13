import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import routes from "../../routes";
import Coffee from "../../components/Views/Coffee/Coffee";
import RouteWithSubRoutes from "../../RouteWithSubRoutes";

class DefaultLayout extends Component {
  render() {
    return (
      <BrowserRouter>

        <Header />
        
        <div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    );
  }
}

export default DefaultLayout;