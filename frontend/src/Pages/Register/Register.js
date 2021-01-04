import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Auth from "../../Auth";

export const Register = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const register = async () => {
        try {
            const res = await axios.post('http://localhost:5000/auth/register', { username: username, password: password });
            console.log(res.data.screen)
            if (res.data.screen === 'user' || res.data.screen === 'admin') {
                Auth.loginUser(() => {
                    props.history.push("/dashboard");
                });
            }
            else {

            }
        } catch (e) {
            console.log(e);
        }
    };
    const logged = localStorage.getItem('logged');
    if (logged) {
        window.location.href = '/'
    }
    else {
        return (
            <div className="container d-flex min-vh-100">
                <div className="row no-gutters my-auto">

                    <div className="mx-auto col-md-6 no-gutters">

                        <div className="row no-gutters">
                            <div className="col-xs-1 col-md-3"></div>
                            <div className="col-xs-10 col-md-12">
                                <form action="" method="post">
                                    <div className="jumbotron" style={{ marginBottom: "0px !important" }}>
                                        <h1 className="display-4 text-center">REGISTER</h1>
                                        <div className="row">
                                            <div className="form-group col-sm-10 col-lg-5">
                                                <label for="name">Your full name</label>
                                                <input type="text" className="form-control" name="name" id="name" aria-describedby="helpId"
                                                    placeholder="" />
                                            </div>
                                            <div className="form-group col-sm-10 col-lg-7">
                                                <label for="email">Email</label>
                                                <input type="text" className="form-control" name="email" id="email" aria-describedby="helpId"
                                                    placeholder="" />
                                            </div>
                                            <div className="form-group col-md-12">
                                                <label for="username">Username</label>
                                                <input type="text" className="form-control" name="username" id="username" aria-describedby="helpId"
                                                    placeholder="" />
                                            </div>
                                            <div className="form-group col-md-10 col-lg-5">
                                                <label for="password">Password</label>
                                                <input type="password" className="form-control" name="password" id="password" aria-describedby="helpId"
                                                    placeholder="" />
                                            </div>
                                            <div className="form-group col-md-10 col-lg-7">
                                                <label for="password2">Confirm password</label>
                                                <input type="password" className="form-control" name="password2" id="password2"
                                                    aria-describedby="helpId" placeholder="" />
                                            </div>

                                            <div className="form-group col-12">
                                                <input onClick={register} className="btn btn-primary p-3 w-100" aria-describedby="helpId"
                                                    placeholder="Sign Up" value="Sign Up" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xs-10 col-md-6">
                                                <p className="text-center">Already have an account ?</p>
                                            </div>
                                            <div className="col-xs-10 col-md-6 text-right">
                                                <a className="text-center" href='/login'>Go to Sign in</a>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>

                        </div>
                        <div className="col-xs-1 col-md-3"></div>
                    </div>
                </div>
            </div>
        );
    }


}

export default Register;