import React from 'react'
import Auth from '../../Auth';
import axios from 'axios';
import ListPost from '../../component/ListPost/ListPost';
import Header from '../../component/Header/Header';
import Sidebar from '../../component/Sidebar/Sidebar';
import PostForm from '../../component/PostForm/PostForm';
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
    return (
        <div >
                <Header />
                <div className="d-flex toggled" id='wrapper'>
                    <Sidebar />
                    <div id="page-content-wrapper">
                        <div id="page-content-wrapper">
                            <PostForm />
                            <ListPost />
                        </div>
                    </div>
                </div>
            </div>
    )
}