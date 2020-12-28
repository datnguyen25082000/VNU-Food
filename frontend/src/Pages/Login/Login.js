import axios from 'axios';
import React, { Component } from 'react';
import Auth from "../../Auth";

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

    auth = async () => {
        try {
            const res = await axios.post('/authenticate', { ...this.state });
            if (res.data.screen === 'user' || res.data.screen === 'admin') {
                Auth.loginUser(() => {
                    this.props.history.push("/dashboard");
                });
            }
            else {

            }
        } catch (e) {
            console.log(e);
        }
    };

    render() {
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
            </div>
        )
    }
}
