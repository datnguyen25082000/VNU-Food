import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login.js";
import Register from "./Pages/Register/Register.js";
import Page404 from "./Pages/Page404/Page404.js";
import Page500 from "./Pages/Page500/Page500.js";
import DefaultLayout from "./Pages/DefaultLayout/DefaultLayout.js";
import DefaultContent from './components/Views/DefaultContent/DefaultContent.js';


const loading = () => {
  return (
    <div className="animated fadeIn pt-3 text-center">Loading...</div>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={props => <Login {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={props => <Page500 {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register"
              render={props => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={props => <Page404 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              component={DefaultLayout}
            />
            <Route
              exact
              path="*"
              name="HOME"
              render={props => <Page404 {...props} />}
            />
            {/* vấn đề k hiện router coffee nằm ở đây, nếu k phải các path trên nó sẽ k hiện gì cả nên đưa về defaultlayout */}
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
