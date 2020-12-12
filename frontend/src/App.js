import './App.css';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import User from "./Pages/Dashboard/User";
import Admin from "./Pages/Dashboard/Admin";
import Customer from "./Pages/Customer/Customer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Page404 from './Pages/Page404/Page404'
import PrivateRoute from "./PrivateRoute";
import React from 'react';

export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
      
        <Switch>
          <Route exact path="/" component={Customer} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" />
          <Route path="/" component={Page404} />
        </Switch>
      
      </div>
    </BrowserRouter>
  )
}
