import React, { Component } from 'react'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="container overflow-hidden mt-5 mb-5">
                    <div className="card">
                        <h5 className="card-header text-center">
                            THÔNG TIN CÁ NHÂN
                        </h5>

                        <div className="row vh-100 m-0">
                            <div className="bg-light border-right col-md-4">
                                <div className="text-center my-2 mt-4">
                                    <form action="" method="POST" enctype="multipart/form-data">
                                        <div className="card">
                                            <h5 className="card-header">Ảnh đại diện</h5>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <input id="fuMain" name="fuMain" type="file" className="file" multiple />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="list-group list-group-flush border rounded mt-4">
                                    <a href="/users/profile?tab=general"
                                        className="list-group-item list-group-item-action">
                                        <i className="fa fa-gear mr-3" aria-hidden="true"></i>
                                        Cài đặt chung
                                    </a>
                                    <a href="/users/profile?tab=password"
                                        className="list-group-item list-group-item-action">
                                        <i className="fa fa-key mr-3" aria-hidden="true"></i>
                                        Quản lý mật khẩu
                                    </a>
                                </div>
                            </div>

                            <div className="card-body col-md-8 mt-2">
                                <form action="/users/profile/save" method="POST">

                                    <div className="form-group">
                                        <label for="name">Họ tên</label>
                                        <input type="text" className="form-control" id="name" name="userDisplayName"
                                            value="Datquadep" required />
                                    </div>

                                    <div className="form-group">
                                        <label for="name">Username</label>
                                        <input type="text" className="form-control" id="username" name="userUsername" value="đasadasd"
                                            readonly />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" id="email" name="userEmail" aria-describedby="emailHelp"
                                            value="sadasdas" required />
                                    </div>
                                    <div className="form-group">
                                        <label for="describe">Giới thiệu bản thân</label>
                                        <textarea className="form-control" name="userIntro" id="describe" cols="30" rows="10">
                                            "dsadsad"
            </textarea>
                                    </div>

                                    <div className="text-right">
                                        <a className="btn btn-outline-success mr-2" href="/" role="button">
                                            <i className="fa fa-backward mr-2" aria-hidden="true"></i>
                                            Quay về
                                        </a>
                                        <button type="submit" className="btn btn-primary">
                                            <i className="fas fa-save mr-2"></i>
                                            Lưu
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
