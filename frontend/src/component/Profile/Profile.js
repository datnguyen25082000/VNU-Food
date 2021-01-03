import React, { Component } from "react";
import { Sửaor } from "@tinymce/tinymce-react";
import axios from "axios";
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../css/Profile.css'

class Profile extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:40}}>
            <div id="kv-avatar-errors-2" className="center-block" style={{width:800, display: 'none' }}></div>
            <form className="form form-vertical" action="/" method="post" enctype="multipart/form-data">
                <div className="row"> 
                    <div className="col-sm-4 text-center">
                        <div className="kv-avatar">
                            <div className="file-loading">
                                <input id="avatar-2" name="avatar-2" type="file"/>
                            </div>
                        </div>
                        <div>
                            <p>Ảnh của bạn</p>
                        </div>
                    </div>
        
                    <div className="col-sm-8">
                        <h3>Cài đặt chung</h3>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="username" className="form-control">Tên của bạn<span className="kv-reqd">*</span></label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="text" className="form-control" id= "1" name="username" required readonly="true"/>
                                </div>
                            </div>
                             <div className="col-sm-1 form-control text-center">
                                <p onclick="addEditFunc('1')">Sửa</p>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="date" className="form-control">Ngày sinh</label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="datetime" id= "2" className="form-control" name="date" readonly="true"  />
                                </div>
                            </div>
                             <div className="col-sm-1 form-control text-center">
                                <p onclick="addEditFunc('2')">Sửa</p>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="Address" className="form-control">Địa chỉ</label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="text" id= "3"className="form-control" name="Address" readonly="true"/>
                                </div>
                            </div>
                             <div className="col-sm-1 form-control text-center">
                                <p onclick="addEditFunc('3')">Sửa</p>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="email" className="form-control">Email<span className="kv-reqd">*</span></label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="email" id="4" className="form-control" name="email" readonly="true" required/>
                                </div>
                            </div>
                            <div className="col-sm-1 form-control text-center">
                                <p  onclick="addEditFunc('4')">Sửa</p>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="phone" className="form-control">Số điện thoại</label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="number" id="5" className="form-control" name="phone" readonly="true"/>
                                </div>
                            </div>
                             <div className="col-sm-1 form-control text-center">
                                <p  onclick="addEditFunc('5')">Sửa</p>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="password" className="form-control">Mật khẩu<span className="kv-reqd">*</span></label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="password"  id="6" className="form-control" name="password" readonly="true" required/>
                                </div>
                            </div>
                             <div className="col-sm-1 form-control text-center">
                                <p onclick="addEditFunc('6')">Sửa</p>
                            </div>
                        </div>
        
                        <h3>Cài đặt nâng cao</h3>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="Description" className="form-control">Mô tả</label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="text" id="7" className="form-control" name="Description" readonly="true"/>
                                </div>
                            </div>
                             <div className="col-sm-1 form-control text-center">
                                <p onclick="addEditFunc('7')">Sửa</p>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="Theme" className="form-control">Theme</label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="text" id= "8" className="form-control" name="Theme" readonly="true" />
                                </div>
                            </div>
                             <div className="col-sm-1 form-control text-center">
                                <p onclick="addEditFunc('8')">Sửa</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="sth" className="form-control">sth</label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="text" id="9" className="form-control" name="sth" readonly="true"/>
                                </div>
                            </div>
                             <div className="col-sm-1 form-control text-center">
                                <p onclick="addEditFunc('9')">Sửa</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label for="contact" className="form-control">Liên lạc khác</label>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="form-group">
                                    <input type="text" id="10" className="form-control" name="contact"readonly="true" />
                                </div>
                            </div>
                             <div className="col-sm-1 form-control text-center">
                                <p onclick="addEditFunc('10')">Sửa</p>
                            </div>
                        </div>
                    
                        <div className="form-group">
                            <hr/>
                            <div className="text-right">
                                <button type="submit" className="btn btn-primary">Lưu thay đổi</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            
        </div>
        );
    }
}

export default Profile;