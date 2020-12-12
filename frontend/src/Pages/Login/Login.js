import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Auth from "../../Auth";

export const Login = (props) => {

    const [screen, setScreen] = useState('auth');
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const auth = async () => {
        try {
            const res = await axios.post('/authenticate', { username: username, password: password });
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
        <div>
            <div method="post" action="" style={{ height: '100vh' }}>
                <div className='row h-100 m-auto'>
                    <div class="jumbotron col-8 col-md-6 col-lg-4 m-auto">
                        <h1 class="display-4 text-center">LOGIN</h1>
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" name="username" id="username" onChange={e => setUsername(e.target.value)} aria-describedby="helpId" placeholder="" />
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" name="password" onChange={e => setPassword(e.target.value)} id="password" aria-describedby="helpId"
                                placeholder="" />
                        </div>


                        <button className="btn btn-primary my-3 w-20" onClick={auth} aria-describedby="helpId" placeholder="" >LOGIN</button>


                        <p class="lead">
                            <a class="btn btn-primary  mr-4" href="/" role="button">HOME</a>
                            <a class="btn btn-primary " href="/register" role="button">REGISTER</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login;