import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Auth from "../../Auth";

export const Register = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const register = async () => {
        try {
            const res = await axios.post('/register', { username: username, password: password });
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
    return (
        <div><form action="" method="post" style={{ height: '100vh' }}>
            <div className='row m-auto h-100'>
                <div class="jumbotron col-8 col-md-6 m-auto">
                    <h1 class="display-4 text-center">REGISTER</h1>


                    <div class="form-group">
                        <label for="name">Your full name</label>
                        <input type="text" class="form-control" name="name" id="name" aria-describedby="helpId" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" name="email" id="email" aria-describedby="helpId" placeholder="" />
                    </div>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" name="username" id="username" aria-describedby="helpId" placeholder="" />
                    </div>
                    <div className='row'>
                        <div className='col-6'> <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" name="password" id="password" aria-describedby="helpId"
                                placeholder="" />
                        </div></div>
                        <div className='col-6'> <div class="form-group">
                            <label for="password2">Confirm password</label>
                            <input type="password" class="form-control" name="password2" id="password2" aria-describedby="helpId"
                                placeholder="" />
                        </div></div>
                    </div>



                    <div class="form-group">
                        <button  onClick={register} class="btn btn-primary" aria-describedby="helpId" placeholder="" submit >SUBMIT</button>
                    </div>

                    <p class="lead">
                        <a class="btn btn-primary mr-3" href="/" role="button">HOME</a>
                        <a class="btn btn-primary " href="/login" role="button">LOGIN</a>
                    </p>
                </div>

            </div>


        </form></div>
    );

}

export default Register;