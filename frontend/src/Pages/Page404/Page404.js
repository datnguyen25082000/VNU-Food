import React, { Component, Fragment } from "react";


class Page404 extends Component {
  render() {
    return (
      <div className="container vh-100 text-center">
        <div className="row vh-100">
          <div className="col-md-12 my-auto">
            <div className="error-template">
              <h1> <span class='font-italic'
                style={{color:'rgb(123, 234, 253)', textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue'}}>Oops!
              </span>
              </h1>
              <h2 className='text-danger'>
                404 Not Found</h2>
              <div className="error-details">
                Sorry, an error has occured, Requested page not found!
                </div>
              <div className="error-actions">
                <a href="/" className="btn btn-primary m-3"><i class="fa fa-home mr-2 p-2" aria-hidden="true"></i><span className="glyphicon glyphicon-home"></span>Take Me Home</a>
                <a href="/login" className="btn btn-primary m-3"><i class="fas fa-edit   mr-2 p-2"></i><span className="glyphicon glyphicon-home"></span>Go to Login page</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;

