import React, { Component } from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { Link } from "react-router-dom";


export default class Post extends Component {

    render() {
        return (
            <div className='col-md-10 p-lg-10 m-auto py-3'>
                <div className="card shadow rounded">
                    {/* <div className="card-header">
                        <div className="d-flex ">
                            <img src={require('../../assets/images/image.jpg')} alt="User's image" className='rounded-circle' width="50" height="50"></img>
                            <h4 className=" mx-3 userName my-auto">
                                <span className='font-bold'
                                    style={{ color: 'rgb(123, 234, 253)', textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue' }}>User Name
                                </span>
                            </h4>
                            <button className='btn btn-danger ml-auto'><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Report</button>
                        </div>
                    </div> */}
                    <div className="row rounded">
                        <div className='col-md-5'>
                            <img src={require('../../assets/images/image.jpg')} alt="User's image" className='w-100 h-100' ></img>
                        </div>
                        <div className='col-md-7 p-relative'>
                            <div className="p-4">
                                <h5 className="card-title text-uppercase font-weight-bold">{this.props.post.postDes}</h5>
                                <p className="card-text font-weight-light">
                                    <div>
                                        {/* // dangerouslySetInnerHTML={{
                                        //     __html: this.props.post.postDetail
                                        // }}> */}
                                        {this.props.post.postDetail}
                                    </div>
                                </p>
                                <div className="text-center w-100" style={{ position: "absolute", bottom: "30px" }}>
                                    <a type="button" href="#" className="btn px-3 mr-3" style={{ color: "red", border: "1px #AFAFAF solid", borderRadius: "60px", width: "130px" }}>Lưu bài viết</a>
                                    <Link to={{
                                        pathname: '/posts/' + this.props.post.postID,
                                        post:   this.props.post
                                    }} params={{ post: this.props.post }} type="button" href="/detail" className="btn px-3" style={{ backgroundColor: "red", color: "white", borderRadius: "60px", width: "130px" }}>Chi tiết</Link>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div >

        )
    }
}
