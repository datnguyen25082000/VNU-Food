import React, { Component, Suspense } from 'react';
import ListPost from '../../component/ListPost/ListPost';
import Header from '../../component/Header/Header';
import Sidebar from '../../component/Sidebar/Sidebar';
import PostForm from '../../component/PostForm/PostForm';
import Separate from '../../component/Separate/Separate';
import Slideshow from '../../component/Slideshow/Slideshow';
import { Container } from "reactstrap";

import "../../css/simple-sidebar.css";
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import routes from "../../routes";
import Detail from '../../component/Detail/Detail';


export default class Customer extends Component {
    loading = () => (
        <div className="animated fadeIn pt-1 text-center">Loading...</div>
    );

    render() {
        return (
            <div >
                <Header />
                <div className="d-flex toggled" id='wrapper'>
                    <Sidebar />
                    <div id="page-content-wrapper">
                        <div id="page-content-wrapper">
                            <Container fluid>
                                {/* <Suspense fallback={this.loading()}>
                                    <Switch>
                                        {routes.map((route, idx) => {
                                            return route.component ? (
                                                <Route
                                                    key={idx}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    name={route.name}
                                                    render={props => <route.component {...props} />}
                                                />
                                            ) : <PostForm />;
                                        })}
                                    </Switch>
                                </Suspense> */}

                                {/* notification */}
                                <div class="alert alert-secondary alert-dismissible fade show p-0 px-3 my-2 rounded-pill" role="alert">
                                    <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                    <button type="button" class="close p-0 px-2" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                
                                <Separate title="Bài viết nổi bật"/>
                                <Slideshow/>
                                <Separate title="Tạo bài viết"/>
                                <PostForm/>
                                <Separate title="Danh sách bài viết"/>
                                <ListPost />
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
