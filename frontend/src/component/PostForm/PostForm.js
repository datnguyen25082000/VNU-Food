import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postID: '',
            postContent: ''
        }
    }

    notify = () => toast.info("You have posted. Thanks for your post !", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        transition: Flip,
    });


    handleSubmit = (e) => {
        e.preventDefault();
        const res = axios.post('/postList/add', { ...this.state });
        this.notify();
    }

    handlePostIDChange = (e) => {
        this.setState({
            postID: e.target.value
        });

        console.log(this.state.postID)
    }

    handleEditorChange = (content, editor) => {
        this.setState({
            postContent: content
        });

        console.log(this.state.postContent)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="p-5">
                <div class="form-group">
                    <input type="text" onChange={this.handlePostIDChange}
                        class="form-control" name="postID" id="postID" aria-describedby="helpId" placeholder="" />
                </div>

                <Editor
                    apiKey="3z24aq1ehvn6w8i0d878thpnmydyb6o2uqwjclilcagozhbt"
                    value=""
                    init={{
                        plugins: 'paste image link autolink lists table media',
                        menubar: false,
                        toolbar: [
                            'undo redo | bold italic underline strikethrough | numlist bullist | alignleft aligncenter alignright | forecolor backcolor | table link image media',
                        ],
                        height: 200,
                        menubar: false
                    }}
                    onEditorChange={this.handleEditorChange}
                />
                <br />
                <input type="submit" className="btn btn-primary " value="Submit" />
                <ToastContainer />

            </form>
        )
    }
}
