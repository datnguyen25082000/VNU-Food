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

const StyledLink = styled.a`
    backgroundColor: palevioletred;
    font-weight: bold;
    background-color: #E2C6C6 !important;
    border-radius: 10px!important;

    :hover, :active {
        background-color: #C39191 !important;
    }
`;


export default class Sidebar extends Component {
    render() {
        return (
            <div className=" border-right position-fixed" id="sidebar-wrapper" style={{ backgroundColor: "#F7F7F7" }}>
                <div className="sidebar-heading text-center">
                    <span className='font-italic'
                        style={{ color: "rgb(123, 234, 253)", textShadow: "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue" }}>PAGES
                    </span>
                </div>
                <StyledGrid className="list-group list-group-flush">
                    <div className="p-2">
                        <StyledLink href="/" className="list-group-item list-group-item-action shadow"><i className="fa fa-home mr-3" aria-hidden="true"></i> VNU Food</StyledLink>
                    </div>
                    <div className="p-2">
                        <StyledLink href="/categories" className="list-group-item list-group-item-action shadow"><i class="fas fa-utensils mr-3"></i> Món ngon nổi bật</StyledLink>
                    </div>
                    <div className="p-2">
                        <StyledLink href="#" className="list-group-item list-group-item-action shadow"><i class="fa fa-filter mr-3" aria-hidden="true"></i> Bộ lọc</StyledLink>
                    </div>
                    <div className="p-2">
                        <StyledLink href="/users" className="list-group-item list-group-item-action shadow"><i class="fa fa-hashtag mr-3" aria-hidden="true"></i> Hashtag</StyledLink>
                    </div>
                    <div className="p-2">
                        <StyledLink href="#" className="list-group-item list-group-item-action shadow"><i class="fas fa-sms mr-3"></i> Trò chuyện</StyledLink>
                    </div>
                    <div className="p-2">
                        <StyledLink href="#" className="list-group-item list-group-item-action shadow"><i class="fas fa-drumstick-bite mr-3"></i> Đề xuất</StyledLink>
                    </div>

                </StyledGrid>
            </div>
        )
    }
}
