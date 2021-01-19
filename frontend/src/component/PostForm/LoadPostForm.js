import React, { Component } from "react";
import PostForm from './PostForm';
export default class LoadPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }
  change = (e) => {
    const a = !this.state.show;
    this.setState({ show: a });
  }
  render() {
    let postForm;
    let button;
    button = <button className="ml-auto btn btn-outline-primary bg-primary text-white" id="btn_preview_0" type="button" onClick={this.change}>Đăng bài</button>
    if (this.state.show) {
      postForm = <PostForm data="block" />;
    }
    else {
      postForm = <PostForm data="none" />;

    }
    return (
      <div className=" container">
       <div className="my-4"> {button}</div>
        {postForm}
      </div>
    );
  }
}