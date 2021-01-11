import React, { Component } from "react";
import axios from "axios";

export default class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {listComment: []};
    }

  componentDidMount() {
    axios
    .get('http://localhost:5000/posts/getComment', 
        {params: {commentPost: this.props.commentPost}})
    .then(res => {
        console.log(res);
        this.setState({
            listComment: res.data.rows
        });
    })
    .catch(err => console.log(err));
  }

  render() {
    let listComment = this.state.listComment;
    console.log(listComment);
    
    return listComment.map((item) => (
      <div className="comment_detail d-flex pt-2">
        <div className="comment_avatar rounded-circle mr-3">
          <img
            style={{width: "40px"}}
            className="comment_avatar rounded-circle"
            src="https://avatar-redirect.appspot.com/google/106274965921876463717?size=400"
            alt="d"
          />
        </div>
        <div className="comment_comment">
          <div
            className="comment_comment  px-3 py-2"
            style={{backgroundColor: "#d1cece", borderRadius: "20px"}}
          >
            <span className="comment_comment font-weight-bold">
              {item.commentUser}
            </span>
            <div className="d-flex">
              <div className="my-rating  " data-rating="4"></div>
            </div>
            <div className="comment_comment">
              <span>
                {item.commentContent}
              </span>
            </div>
          </div>
          <div className="comment_commentTime px-3" style={{color: "#8b8a8a"}}>
            <p className="comment_createdAt">{item.commentTime} trước</p>
          </div>
        </div>
      </div>
    )
    )
  }
}
