import React, { Component } from 'react'
import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';

export default class Post extends Component {

    render() {
        console.log(this.props.post)
        return (
            <div className='col-md-6 p-lg-5 m-auto py-3'>
                <div type='button' className="card shadow rounded">
                    <div className="card-header">
                        <div className="d-flex ">
                            <img src={require('../../assets/images/image.jpg')} alt="User's image" className='rounded-circle' width="50" height="50"></img>
                            <h4 className=" mx-3 userName my-auto">
                                <span className='font-bold'
                                    style={{ color: 'rgb(123, 234, 253)', textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue' }}>User Name
                                </span>
                            </h4>
                            <button className='btn btn-danger ml-auto'><i className="fa fa-exclamation-triangle" aria-hidden="true"></i> Report</button>
                        </div>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.post.postID}</h4>
                        <p className="card-text">
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: this.props.post.postContent
                                }}>
                            </div>
                        </p>
                    </div>
                    <div className='card-footer'>
                        <div className="rate-comment">
                            <Rate />
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
