import React, { Component } from 'react'
import 'rc-rate/assets/index.css';
import { Link } from "react-router-dom";
import Rate from 'rc-rate';
import axios from "axios";


export default class Post extends Component {
    renderPostDetail = () => {
        var detail = this.props.post.postDetail;
        if (detail.length > 150) {
            detail = detail.substring(0, 140) + "..."
        }
        return (
            <p dangerouslySetInnerHTML={{
                __html: detail
            }}></p>
        )
    }

        render() {
            return (
                <div className='p-lg-10 m-auto py-3'>
                    <div className="card shadow rounded">
                        <div className="row rounded">
                            <div className='col-md-5'>
                                <img src={this.props.post.image}  alt="Post's image" style={{width: "300px", height:"210px"}} ></img>
                            </div>
                            <div className='col-md-7 p-relative'>
                                <div className="p-4">
                                    <h5 className="card-title text-uppercase font-weight-bold">{this.props.post.postDes}</h5>
                                    <p className="card-text font-weight-light">
                                        <div>
                                            {this.renderPostDetail()}
                                        </div>
                                    </p>
                                    <div className="text-center" style={{ position: "absolute", bottom: "30px", right: "40px" }}>
                                        <a type="button" href={"/posts/" +this.props.post.postID} className="btn px-3 bg-primary rounded" style={{  color: "white", width: "130px" }}>Chi tiết</a>
                                    </div>
                                </div>
                            </div>
    
                        </div>
    
                    </div>
                </div >
    
            )
        }
    }
