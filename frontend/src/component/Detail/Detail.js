import React, { Component } from 'react'
import axios from 'axios';
import Comment from '../Comment/Comment'


export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: ['a', 'b', 'c', 'd']
        }
    }

    async componentWillMount() {
        const response = await axios.get('http://localhost:5000/posts/' + this.props.match.params.id);
        this.setState({ post: response.data.post })
    }

    listComment = () => {
        return (
            this.state.comments.map((item, index) => {
                return (
                    <Comment />
                )
            })
        )
    }

    getData = () => {
        var post = this.props.location.post;
        if (post === undefined) {
            post = this.state.post
        }

        return (
            <div class="container">
                <div class="post-title">
                    {post.postDes}
                </div>
                <div class="post-des">
                    {post.postDetail}
                </div>
                <div class="post-detail">
                    <div class="row">
                        <div class="col-5">

                        </div>
                        <div class="col-7">

                        </div>
                    </div>
                </div>
               
            </div>
        )
    };

    render() {
        return (

            <div className="container">
                {this.getData()}
                <div class="list-comment">
                 
                </div>
            </div>
        )
    }
}
