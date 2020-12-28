import React, { Component } from 'react';
import ListPost from '../../component/ListPost/ListPost';
import Header from '../../component/Header/Header';
import Sidebar from '../../component/Sidebar/Sidebar';
import PostForm from '../../component/PostForm/PostForm';
import "../../css/simple-sidebar.css";

export default class Customer extends Component {

    
    render() {
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
}
