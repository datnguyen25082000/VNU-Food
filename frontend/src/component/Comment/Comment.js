import React, { Component } from 'react'
import styled from 'styled-components';
import Rate from 'rc-rate';
import axios from 'axios';


const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: ${({ size }) => size}px;
    
  }
`
export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = { listComment: [] };
  }

  // componentWDidMount() {
  //   axios
  //     .get('http://localhost:5000/posts/getComment/' + this.props.commentPost)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         listComment: res.data.rows
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    let item = this.props.commentPost;
    if (item !== null) {
      return (
        <div className="comment_detail d-flex pt-2">
          <div className="comment_avatar rounded-circle mr-3">
            <img
              style={{ width: "40px" }}
              className="comment_avatar rounded-circle"
              src="https://avatar-redirect.appspot.com/google/106274965921876463717?size=400"
              alt="d"
            />
          </div>
          <div className="comment_comment">
            <div
              className="comment_comment  px-3 py-2"
              style={{ backgroundColor: "#d1cece", borderRadius: "20px" }}
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
            <div className="comment_commentTime px-3" style={{ color: "#8b8a8a" }}>
              <p className="comment_createdAt">{item.commentTime} trước</p>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}
