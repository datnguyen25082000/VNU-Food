import axios from 'axios';
import React, { Component } from 'react';
import Auth from "../../Auth";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
        }
    }

    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    auth = () => {
        try {
            axios.post('/auth/login', { ...this.state })
                .then(function (res) {
                    if (res.data.logged) {
                        var user = res.data.user;
                        localStorage.setItem('user', JSON.stringify(user));
                        localStorage.setItem('logged', res.data.logged);

                        if (res.data.user !== undefined && res.data.user !== null) {
                            window.location.href = '/'
                        }
                        else {
                            toast.info("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin!", {
                                position: toast.POSITION.BOTTOM_CENTER,
                                autoClose: 2000,
                                transition: Flip,
                            });
                        }
                    }
                    else {
                        toast.info("Đăng nhập thất bại, vui lòng kiểm tra lại thông tin!", {
                            position: toast.POSITION.BOTTOM_CENTER,
                            autoClose: 2000,
                            transition: Flip,
                        });
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } catch (e) {
            this.notify()
            console.log(e);
        }
    };

    render() {
        const logged = localStorage.getItem('logged');
        if (logged) {
            window.location.href = '/'
        }
        else {
            return (
                <div className="container min-vh-100 d-flex flex-column justify-content-center">
                    <div className="row mt-auto">

                    </div>
                    <div className="row">
                        <div className="col-xs-10 col-md-6 m-auto">
                            <form action="" method="post">
                                <div className="jumbotron">
                                    <h1 className="display-4 text-center">LOGIN</h1>
                                    <div className="form-group">
                                        <label for="username">Username</label>
                                        <input type="text" onChange={this.handleUsernameChange} className="form-control" name="username" id="username"
                                            aria-describedby="helpId" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" onChange={this.handlePasswordChange} className="form-control" name="password" id="password"
                                            aria-describedby="helpId" placeholder="" />
                                    </div>
                                    <div className="form-group">
                                        <input onClick={this.auth} type="button" className="btn btn-primary btn-lg w-100" aria-describedby="helpId"
                                            placeholder="" value="Sign In" />
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="row mb-auto">
                        <div className="col-xs-1 col-md-3">
                        </div>
                        <div className="col-xs-10 col-md-6 d-flex">
                            <div className='align-self-end'>
                                <a className='mr-1 btn btn-lg'>
                                    <i className="fab fa-facebook-square fa-3x text-primary"></i>
                                </a>
                            </div>
                            <div className='align-self-end'>
                                <a className='btn btn-lg'>
                                    <i className="fab fa-google-plus-square fa-3x text-danger"></i>
                                </a>
                            </div>
                            <div className='ml-auto'>
                                <p className="text-center">You do not have an account ?</p>

                                <p className="text-center">
                                    <a className="btn btn-primary btn-lg" href="/register" role="button">Create Your Account</a>
                                </p>
                            </div>
                        </div>
                        <div className="col-xs-1 col-md-3"></div>
                    </div>
                    <ToastContainer />

                </div>
            )
        }

    }
}
