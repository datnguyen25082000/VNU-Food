import React, { Component, useImperativeHandle } from "react";
import axios from "axios";
import Post from './Post';
import styled from "styled-components";
import loadingImage from './../ListPost/Magnify-1.6s-197px.svg';
import 'react-toastify/dist/ReactToastify.css';

const loading = () => (
    <div className="animated fadeIn pt-3 text-center">Loading...</div>
  );

const StyledGrid = styled.div`
    .transition-enter {
        opacity: 0.01;
        transform: translate(0, -30px);
    }

    .transition-enter-active {
        opacity: 1;
        transform: translate(0, 0);
        transition: all 300ms ease-in;
    }
`;

export default class Mydinner extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            posts: [],
            msg: '',
            userName: 'user'
        }
        this.handleRemove = this.handleRemove.bind(this);
    }

    async componentDidMount() {
        axios ({
            method: 'GET',
            url: 'http://localhost:5000/users/mydiner',
            data: this.state.userName
        }).then(res =>{
            this.setState({ 
                posts: res.data.posts.reverse(),
                msg: res.data.msg
            });
        }).catch(err =>{
            console.log(err);
        });
    }

    async handleRemove(postID) {
        const params = new URLSearchParams();
        params.append('postID', postID);
        params.append('userName', this.state.userName);
        axios ({
            method: 'POST',
            url: 'http://localhost:5000/users/rmDinner',
            data: params
        }).then(res =>{
            this.setState({ 
                posts: res.data.posts.reverse(),
                msg: res.data.msg
            });
            console.log(this.state.msg);
        }).catch(err =>{
            console.log(err);
        });
    }

    renderListPost = () => {
        var list = this.state.posts;

        if (list.length > 0) {
            //document.getElementById("loadingImage").classList.add('d-none');
            return (
                list.map((post , index) => {
                    console.log(post);
                        return (
                                <div key={post.postID}>
                                    <div className='col-md-10 p-lg-10 m-auto py-3'>
                                        <Post post={post} key={post.postID}/>
                                    </div>
                                    <div className="col-md-2 p-lg-10 m-auto py-3 text-center">
                                        <button type="button" onClick={() => this.handleRemove(post.postID)} className="btn px-3 mr-3" style={{ color: "red", border: "1px #AFAFAF solid", borderRadius: "60px", width: "130px" }}>Xóa</button>
                                    </div>
                                </div>
                        )
                })
            )
        }
        else return (
            <img className="mx-auto" id="loadingImage" src={loadingImage} alt="React Logo" />
        )
    }

    render(){
        return(
            <div component={StyledGrid} className="row container m-auto">
                {this.renderListPost()}
            </div>
        );
    }

}