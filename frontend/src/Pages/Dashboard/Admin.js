import Auth from '../../Auth';
import React from 'react'
import axios from 'axios';

export default function Admin(props) {

    function handleLogout() {
        Auth.logout(async () => {
            try {
                await axios.get('/clear-cookie');
            } catch (e) {
                console.log(e);
            }
            props.history.push("/login");
        });
    };


    return (
        <div>
            <div>
                <p>Admin panel</p>
                <button type="button" name="" id="" class="btn btn-primary btn-lg btn-block" onClick={handleLogout}>Logout</button>

            </div>
        </div>
    )
}