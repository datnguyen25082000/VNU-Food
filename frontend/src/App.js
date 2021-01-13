import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import User from "./component/User";
import Admin from "./component/Admin";
import Customer from "./component/Customer";
import Login from "./component/Login";
import PrivateRoute from "./PrivateRoute";
import React from 'react';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <p>HEADER</p>
        <Switch>
          <Route exact path="/" component={Customer} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <PrivateRoute exact path="/user" component={User} />
        </Switch>
        <p>FOOTER</p>
      </div>
    </BrowserRouter>
  )
}
