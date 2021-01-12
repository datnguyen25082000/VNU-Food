import React, { Component } from 'react'
import 'rc-rate/assets/index.css';
import { Link } from "react-router-dom";


export default class Post extends Component {

    render() {
        return (
            <div>
                    <div className="card shadow rounded" >
                        <div className="row rounded">
                            <div className='col-md-5'>
                                <img src={require('../../assets/images/image.jpg')} alt="User's image" className='w-100 h-100' />
                            </div>
                            <div className='col-md-7 p-relative'>
                                <div className="p-4">
                                    <h5 className="card-title text-uppercase font-weight-bold">{this.props.post.postDes}</h5>
                                    <div className="card-text font-weight-light">
                                        <div>
                                            {this.props.post.postDetail}
                                        </div>
                                    </div>
                                    <div className="text-center w-100" style={{ position: "absolute", bottom:"30px" }}>
                                        <Link to="
                                            pathname: '/posts/' + this.props.post.postID,
                                            post:   this.props.post
                                        " params=" post: this.props.post " type="button" href="/detail" className="btn px-3" style={{ backgroundColor:"red", color: "white", borderRadius: "60p", width: "130px" }}>Chi tiết</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div >
            </div>
        )
    }
}
