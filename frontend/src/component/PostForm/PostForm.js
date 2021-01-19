import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            postDes: '',
            postDetail: '',
            postImage: "",
        }
    }

    notifySuccess = () => toast.info("Bạn đã đăng bài. cảm ơn bài chia sẽ của bạn !", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        transition: Flip,
    });
    notifyFail = () => toast.info("Bạn cần nhập đầy đủ thông tin !", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        transition: Flip,
    });
    notifyError = () => toast.info("Bạn cần đăng nhập trước khi đăng bài !", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        transition: Flip,
    });


    handleSubmit = (e) => {
        e.preventDefault();
        try {
            if(this.state.postDes.length == 0 || this.state.postDetail.length == 0  || this.state.postImage.length == 0) {
                this.notifyFail();
                return
            }
            const user = JSON.parse(localStorage.getItem('user'));
            const postUser = user.userUsername;
            let formData = new FormData();
            for (let i = 0; i < this.state.postImage.length; i++) {
                formData.append(`postImage`, this.state.postImage[i])
            }
            formData.append('postDes', this.state.postDes);
            formData.append('postDetail', this.state.postDetail);
            formData.append('postUser', postUser);

            if (postUser !== undefined) {
                const res = axios.post('/posts/add', formData);
                this.notifySuccess();
                window.location.reload();
            }
            else {
                this.notifyError();
            }
        }
        catch (err) {
            this.notifyError();
        }
    }

    handlePostDesChange = (e) => {
        this.setState({
            postDes: e.target.value
        });
    }

    handleEditorChange = (content, editor) => {
        this.setState({
            postDetail: content
        });
    }

    handlePostImageChange = (e) => {
       
        this.setState({
            postImage: e.target.files
        });
    }

    render() {
        const a = this.props.data;
        return (
            <form onSubmit={this.handleSubmit} className="mb-5" style={{'display': a}} enctype="multipart/form-data">
                <div class="form-group">
                    <label>Tiêu đề bài đăng</label>
                    <input type="text" onChange={this.handlePostDesChange}
                        class="form-control" name="postDes" id="postDes" aria-describedby="helpId" placeholder="" />
                </div>
                <label>Nội dung bài đăng</label>
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
                <label>Hình ảnh minh họa cho bài viết</label>

                <div class="file-loading">
                    <input id="postImage" name="postImage" type="file" multiple onChange={this.handlePostImageChange} />
                </div>
                <button type="submit" className="btn btn-outline-info mt-3 px-5">Đăng bài</button>

                <ToastContainer />

            </form>
        )
    }
}
