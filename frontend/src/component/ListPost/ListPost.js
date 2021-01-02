import React, { Component, useRef } from 'react'
import Post from './Post';
import axios from 'axios';
import styled from "styled-components";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import loadingImage from './Magnify-1.6s-197px.svg';


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


export default class ListPost extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] }
    }


    async componentWillMount() {
        const response = await axios.get('http://localhost:5000/posts/');
        this.setState({ posts: response.data.posts.reverse() })
    }

    async componentDidUpdate(prevProps) {
        const response = await axios.get('http://localhost:5000/posts/');
        this.setState({ posts: response.data.posts.reverse() })
    }

    lastBookElementRef = () => {

    }

    renderListPost = () => {
        var list = this.state.posts;
        if (list.length > 0) {
            document.getElementById("loadingImage").classList.add('d-none');
            return (
                list.map((item, index) => {

                    return (
                        <CSSTransition key={item.postID} timeout={300} classNames="transition">
                            <Post post={item} key={item.postID} />
                        </CSSTransition>
                    )
                })
            )
        }
        else return (
            <img className="mx-auto" id="loadingImage" src={loadingImage} alt="React Logo" />
        )
    }

    render() {
        var list = this.state.posts;
        return (
            <TransitionGroup component={StyledGrid} className="row container m-auto">
                {this.renderListPost()}
            </TransitionGroup>
        );
    }
}
