import React, { Component, Suspense } from 'react';
import ListPost from '../../component/ListPost/ListPost';
import Header from '../../component/Header/Header';
import Sidebar from '../../component/Sidebar/Sidebar';
import PostForm from '../../component/PostForm/PostForm';
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

                                <Suspense fallback={this.loading()}>
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
                                </Suspense>
                            </Container>


                            {/* <PostForm />
                            <ListPost /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
