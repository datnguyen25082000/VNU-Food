import React, { Component, Fragment } from "react";
import "./Page404.css";

class Page404 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
              <h1>
                Oops!</h1>
              <h2>
                404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
                </div>
              <div className="error-actions">
                <a href="/" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>Take Me Home</a>
                <a href="/login" className="btn btn-primary btn-lg"><span className="glyphicon glyphicon-home"></span>Go to Login page</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;

