import React, { Component } from "react";
import PostForm from './PostForm';

export default class LoadPostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {show: false};
      }
      change = (e) => {
        this.setState({show: true});
      }
      render() {
        let postForm;
        let button;
        if (this.state.show) {
          postForm = <PostForm/>;
        }
        else {
            button = <button className="btn btn-outline-primary bg-primary text-white" type="button" onClick={this.change}>Tạo</button>
        }
        return (
          <div>
          {button}
          {postForm}
          </div>
        );
      }
}