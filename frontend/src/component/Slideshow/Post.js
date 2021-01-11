import React, { Component } from "react";
import './Slideshow.css';

export default class Separate extends Component {
    render() {
        return (
        <div>
            <div class="carousel-item active border">
                <img
                    src="assets/img/backgrounds/1.jpg" class="img-fluid mx-auto d-block" alt="img1"
                />
            </div>
        </div>
        );
    }
}
