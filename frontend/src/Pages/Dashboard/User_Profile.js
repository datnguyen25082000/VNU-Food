import React from 'react'
import Auth from '../../Auth';
import axios from 'axios';
import Header1 from '../../component/Header/Header1.js';
import Sidebar from '../../component/Sidebar/Sidebar';
import Profile from '../../component/Profile/Profile';
import "../../css/simple-sidebar.css";

export default function User(props) {
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

    function handleProfile(){
        props.history.push("/login");
    }

    return (
        <div >
                <Header1/>
                <div className="d-flex toggled" id='wrapper'>
                    <Sidebar/>
                    <div id="page-content-wrapper">
                        <div id="page-content-wrapper">
                            <Profile/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

