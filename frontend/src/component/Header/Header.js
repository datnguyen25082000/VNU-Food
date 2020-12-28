import React, { Component } from "react";
import { StickyContainer, Sticky } from "react-sticky";

class Header extends Component {
    render() {
        return (
            <div className='w-100' style={{ zIndex: "10", top: "0px", position: "sticky"}}>
                <nav className="navbar navbar-expand-md navbar-light bg-light shadow d-flex px-4 py-3 ">
                    <a className="navbar-brand mr-3" href="/">
                        <span className="text-danger">Online</span> <span className='font-italic'
                            style={{ color: "rgb(123, 234, 253)", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue" }}>Academy</span>
                    </a>

                    <div className="collapse navbar-collapse flex-grow-1" id="navbarSupportedContent">
                        <button className="btn btn-primary d-lg-inline d-none" id="menu-toggle"><i id="menu-toggle-icon"
                            className="fas fa-indent"></i>
                        </button>
                        <form id="frmLogout" method="POST" action="/auth/logout"></form>
                        <form className="form-inline my-2 my-lg-0 form-nav flex-grow-1">
                            <input className="form-control mr-sm-2 flex-grow-1 mx-3 mr-2" type="search" placeholder="Search"
                                aria-label="Search" />

                            <div className="ml-3">
                                <a className="btn my-2 my-sm-0 m-1 flex-grow-1 d-lg-inline d-none" href="/auth/login">
                                    Teach on OA
                                                </a>
                                <a className="btn my-2 my-sm-0 m-1 flex-grow-1 mr-4" href="/auth/login">
                                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                                </a>
                                <div className="d-lg-inline d-none">
                                    <a className="btn btn-outline-primary my-2 my-sm-0 m-1 text-primary" style={{ width: "6rem!important" }}
                                        href="/login">
                                        Log in
                                                    </a>
                                    <a className="btn btn-outline-primary my-2 my-sm-0 m-1 bg-primary text-white " style={{ width: "6rem!important" }}
                                        href="/register">
                                        Sign up
                                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;