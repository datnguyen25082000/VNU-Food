import React, { Component } from "react";
import axios from "axios";

export default class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            commentContent: ''
        }
    }

    handleTextAreaChange = (e) => {
        this.setState({
            commentContent: e.target.value
        });

        console.log(this.state.commentContent)
    }

    handleSubmit = (e) => {
        console.log(this.state.commentContent);
        var user = JSON.parse(localStorage.getItem('user'));
        axios
            .post('http://localhost:5000/users/comment', 
                {commentContent: this.state.commentContent, commentPost: this.props.postID, user: user.userUsername})
            .then(res => console.log(res))
            .catch(err => console.log(err));
        this.setState({commentContent: ""});
        window.location.reload();
        e.preventDefault();
    }

    render() {
        return (
            <div className="comment-form d-flex m-3">
                <div className="user-avatar rounded-circle p-3 mr-3">
                    <img className="rounded-circle" src="https://avatar-redirect.appspot.com/google/106274965921876463717?size=400"
                    style={{width: "50px"}} alt=""/>
                </div>
                <form onSubmit={this.handleSubmit} className="flex-grow-1 text-right">
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Viết bình luận của bạn ..." onChange={this.handleTextAreaChange} value={this.state.commentContent} rows="3" required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        <i className="fa fa-send" aria-hidden="true"></i>
                        Gửi
                    </button>
                </form>
            </div>
        )
    }
}
