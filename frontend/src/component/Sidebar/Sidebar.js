import React, { Component } from 'react'
import styled from "styled-components";

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

export default class Sidebar extends Component {
    render() {
        return (
            <div className="bg-light border-right position-fixed" id="sidebar-wrapper">
                <div className="sidebar-heading text-center">   
                    <span className='font-italic'
                    style={{color:"rgb(123, 234, 253)", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"}}>PAGES
                    </span>
                </div>
                <StyledGrid className="list-group list-group-flush">
                    <a href="/" className="list-group-item list-group-item-action bg-light"><i className="fa fa-home mr-3" aria-hidden="true"></i> Home</a>
                    <a href="/categories" className="list-group-item list-group-item-action bg-light"><i className="fa fa-list-ol mr-3" aria-hidden="true"></i> Categories</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light"><i className="fas fa-books mr-3"></i> Courses</a>
                    <a href="/users" className="list-group-item list-group-item-action bg-light"><i className="fa fa-home mr-3" aria-hidden="true"></i> Users</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light"><i className="fa fa-list-ol mr-3" aria-hidden="true"></i> Categories</a>
                    <a href="#" className="list-group-item list-group-item-action bg-light"><i className="fas fa-books mr-3"></i> Courses</a>
                </StyledGrid>
            </div>
        )
    }
}
