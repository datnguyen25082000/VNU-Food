import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer font-small special-color-dark pt-4 mt-5 px-5 text-dark">
                <h4 className="mb-3">VNU Food</h4>
                <div className="">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <form className="form-inline">
                                <input className="form-control form-control-sm mr-3 w-75 text-dark" type="text" placeholder="Search"
                                    aria-label="Search" />
                                <i className="fas fa-search" aria-hidden="true"></i>
                            </form>
                        </div>

                        <div className="col-md-6 mb-4">
                            <form className="input-group">
                                <input type="text" className="form-control form-control-sm text-dark" placeholder="Your email"
                                    aria-label="Your email" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-sm btn-outline-white my-0 text-dark" type="button">Sign up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;