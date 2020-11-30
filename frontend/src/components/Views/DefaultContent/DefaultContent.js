import React, { Component } from "react";
import Post from "../../ListPost/ListPost";
import SearchBox from "../../SearchBox/SearchBox";

class DefaultContent extends Component {
    render() {
        return (
            <div class="container-fluid mt-4">
                <div class="row">
                    <div class="col-sm-3">
                        <div class="card">
                            <div class="card-header">
                                <h4>Notification</h4>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Special title treatment</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div class="card mt-3">
                            <div class="card-header">
                                <h4>Diner</h4>
                            </div>
                            <div class="list-group list-group-flush">
                                <a href="#" class="list-group-item list-group-item-action active">Cras justo odio</a>
                                <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                                <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
                            </div>
                        </div>
                        <div class="card mt-3">
                            <div class="card-header">
                                <h4>Suggestion</h4>
                            </div>
                            <div class="list-group list-group-flush">
                                <a href="#" class="list-group-item list-group-item-action active">Cras justo odio</a>
                                <a href="#" class="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                                <a href="#" class="list-group-item list-group-item-action">Morbi leo risus</a>
                                <a href="#" class="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                                <a href="#" class="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">Vestibulum at eros</a>
                            </div>
                        </div>
                    </div>



                    <div class="col-sm-9">
                        <div class="card ">
                            <SearchBox />
                        </div>
                        <div class="card mt-3">
                            <div class="card-header">
                                <h4>View post</h4>
                            </div>
                           <Post />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DefaultContent;