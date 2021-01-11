import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { StickyContainer, Sticky } from "react-sticky";

class Header extends Component {

    handleLogout() {
        localStorage.removeItem('user');
        localStorage.removeItem('logged');
        window.location.href = '/login'
    }

    authRender = () => {
        var user = JSON.parse(localStorage.getItem('user'));
        var logged = localStorage.getItem('logged')

        if (logged) {
            return (
                <div class="ml-5  d-flex">
                    <div class="nav-item dropdown d-lg-inline d-none">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="fa fa-user-circle mr-1" aria-hidden="true"></i>
                            <b>{user.userUsername}</b>
                        </a>
                        <div class="dropdown-menu  dropdown-menu-right p-0" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item px-3 py-2 text-center list-group-item" href="/profile">
                                <i class="fa fa-user mr-2" aria-hidden="true"></i>
                            Tài khoản
                            </a>
                            <div class="dropdown-divider m-0"></div>
                            <a class="dropdown-item px-3 py-2 text-center list-group-item" href="javascript:void(0)" onClick={this.handleLogout}>
                                <i class="fa fa-sign-out mr-2" aria-hidden="true"></i>
                Đăng xuất
              </a>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="d-lg-flex d-none">
                    <a className="btn btn-outline-primary my-2 my-sm-0 m-1 text-primary" style={{ width: "7rem" }}
                        href="/login">
                        Đăng nhập
                    </a>
                    <a className="btn btn-outline-primary my-2 my-sm-0 m-1 bg-primary text-white " style={{ width: "7rem" }}
                        href="/register">
                        Đăng ký
                    </a>
                </div>
            )
        }
    }
    render() {
        return (
            <div className='w-100' style={{ zIndex: "10", top: "0px", position: "sticky", }}>
                <nav className="navbar navbar-expand-md navbar-light shadow d-flex px-4 py-3 " style={{ backgroundColor: "white" }}>
                    <a className="navbar-brand mr-3" href="/">
                        <span className="text-danger">Online</span> <span className='font-italic'
                            style={{ color: "rgb(123, 234, 253)", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue" }}>Academy</span>
                    </a>
                    <form id="frmLogout" method="POST" action="/auth/logout"></form>
                    <div className="collapse navbar-collapse flex-grow-1" id="navbarSupportedContent">
                        <button className="btn btn-primary d-lg-inline d-none" id="menu-toggle"><i id="menu-toggle-icon"
                            className="fas fa-indent"></i>
                        </button>
                        <form id="frmLogout" method="POST" action="/auth/logout"></form>
                        <div className="form-inline my-2 my-lg-0 form-nav flex-grow-1">
                            <input className="form-control mr-sm-2 flex-grow-1 mx-3 mr-2" id="searchInput" type="search" placeholder="Tìm kiếm bài đăng"
                                aria-label="Search" />

                            <div className="ml-3">

                                {this.authRender()}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;