import React, { Component } from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { Link } from "react-router-dom";


export default class Post extends Component {

    renderPostDetail = () => {
        var detail = this.props.post.postDetail;
        if (detail.length > 150) {
            detail = detail.substring(0, 100) + "..."
        }
        return (
            <p  dangerouslySetInnerHTML={{
                __html: detail
            }}></p>
        )
    }

    render() {
        return (
            <div className='p-lg-10 m-auto py-3 w-100'>
                <div className="card shadow rounded w-100">
                    <div className="d-flex rounded">
                        <div className=''>
                            <img src={this.props.post.image}  alt="User's image" style={{width: "300px", height:"210px"}} ></img>
                        </div>
                        <div className='flex-grow-1' style={{position: "relative"}}>
                            <div className="p-4">
                                <h5 className="card-title text-uppercase font-weight-bold">{this.props.post.postDes}</h5>
                                <p className="card-text font-weight-light">
                                    <div>
                                        {this.renderPostDetail()}
                                    </div>
                                </p>
                                <div className="text-center w-100" style={{ position: "absolute", bottom: "30px" }}>
                                    <a type="button" href="#" className="btn px-3 mr-3 text-primary rounded" style={{ border: "1px #AFAFAF solid", width: "130px" }}>Lưu bài viết</a>
                                    
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
