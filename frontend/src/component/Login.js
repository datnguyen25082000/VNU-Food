import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Auth from "../Auth";

export const Login = (props) => {

    const [screen, setScreen] = useState('auth');
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const auth = async () => {
        try {
            const res = await axios.post('/authenticate', { username: username, password: password });

            if (res.data.screen === 'user') {
                Auth.loginUser(() => {
                    props.history.push("/user");
                  });
            }
            else if (res.data.screen === 'admin'){
                Auth.loginAdmin(() => {
                    props.history.push("/admin");
                });
            }
            else {
            
            }
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <form method="post" action="">
            <div className="form-group row">
                <label for="username" className="col-sm-2 col-form-label">Username</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="username" name="username" onChange={e => setUsername(e.target.value)} placeholder="Email" />
                </div>
            </div>

            <div className="form-group row">
                <label for="password" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                </div>
            </div>

            <div className="form-group row">
                <div className="col-sm-10">
                    <button type="button" onClick={auth} className="btn btn-primary">Sign in</button>
                </div>
            </div>
        </form>
    )
}

export default Login;