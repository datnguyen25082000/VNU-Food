import React, { Component } from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { Link } from "react-router-dom";


export default class Post extends Component {

    renderPostDetail = () => {
        var detail = this.props.post.postDetail;
        if (detail.length > 150) {
            detail = detail.substring(0, 140) + "..."
        }
        return (
            <p  dangerouslySetInnerHTML={{
                __html: detail
            }}></p>
        )
    }

    render() {
        return (
            <div className='col-md-10 p-lg-10 m-auto py-3'>
                <div className="card shadow rounded">
                    <div className="row rounded">
                        <div className='col-md-5'>
                            <img src="http://localhost:5000/public/images/image.jpg" alt="User's image" className='w-100 h-100' ></img>
                        </div>
                        <div className='col-md-7 p-relative'>
                            <div className="p-4">
                                <h5 className="card-title text-uppercase font-weight-bold">{this.props.post.postDes}</h5>
                                <p className="card-text font-weight-light">
                                    <div>
                                        {this.renderPostDetail()}
                                    </div>
                                </p>
                                <div className="text-center w-100" style={{ position: "absolute", bottom: "30px" }}>
                                    <a type="button" href="#" className="btn px-3 mr-3" style={{ color: "red", border: "1px #AFAFAF solid", borderRadius: "60px", width: "130px" }}>Lưu bài viết</a>
                                    
                                    <a type="button" href={"/posts/" +this.props.post.postID} className="btn px-3" style={{ backgroundColor: "red", color: "white", borderRadius: "60px", width: "130px" }}>Chi tiết</a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >

        )
    }
}
