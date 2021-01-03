import React, { Component } from 'react';
import Post from './Post';
import './Slideshow.css'


export default class Separate extends Component {
  render() {
    const itemStyle = {
      height: "200px",
      width: "200px"
    };
      return (
        <div class="container-fluid">
          <div id="carousel-example" class="carousel slide position-relative" data-ride="carousel">
              <div class="carousel-inner row mx-auto" role="listbox">
                <div class="card carousel-item col-2 active border px-2 text-left" style={itemStyle}>
                    <img src="..." class="card-img-top img-thumbnail h-50 d-block" alt="..."/>
                    <div class="card-body p-0">
                      <h5 class="card-title m-0">Card title</h5>
                      <p class="card-text m-0">Some quick example</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="..." class="img-thumbnail rounded-circle mr-1" alt="..." />
                      <div> Username </div>
                    </div>
                </div>
                <div class="card carousel-item col-2 border px-2 text-left" style={itemStyle}>
                    <img src="..." class="card-img-top img-thumbnail h-50 d-block" alt="..."/>
                    <div class="card-body p-0">
                      <h5 class="card-title m-0">Card title</h5>
                      <p class="card-text m-0">Some quick example</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="..." class="img-thumbnail rounded-circle mr-1" alt="..." />
                      <div> Username </div>
                    </div>
                </div>
                <div class="card carousel-item col-2 border px-2 text-left" style={itemStyle}>
                    <img src="..." class="card-img-top img-thumbnail h-50 d-block" alt="..."/>
                    <div class="card-body p-0">
                      <h5 class="card-title m-0">Card title</h5>
                      <p class="card-text m-0">Some quick example</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="..." class="img-thumbnail rounded-circle mr-1" alt="..." />
                      <div> Username </div>
                    </div>
                </div>
                <div class="card carousel-item col-2 border px-2 text-left" style={itemStyle}>
                    <img src="..." class="card-img-top img-thumbnail h-50 d-block" alt="..."/>
                    <div class="card-body p-0">
                      <h5 class="card-title m-0">Card title</h5>
                      <p class="card-text m-0">Some quick example</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="..." class="img-thumbnail rounded-circle mr-1" alt="..." />
                      <div> Username </div>
                    </div>
                </div>
                <div class="card carousel-item col-2 border px-2 text-left" style={itemStyle}>
                    <img src="..." class="card-img-top img-thumbnail h-50 d-block" alt="..."/>
                    <div class="card-body p-0">
                      <h5 class="card-title m-0">Card title</h5>
                      <p class="card-text m-0">Some quick example</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="..." class="img-thumbnail rounded-circle mr-1" alt="..." />
                      <div> Username </div>
                    </div>
                </div>
                <div class="card carousel-item col-2 border px-2 text-left" style={itemStyle}>
                    <img src="..." class="card-img-top img-thumbnail h-50 d-block" alt="..."/>
                    <div class="card-body p-0">
                      <h5 class="card-title m-0">Card title</h5>
                      <p class="card-text m-0">Some quick example</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="..." class="img-thumbnail rounded-circle mr-1" alt="..." />
                      <div> Username </div>
                    </div>
                </div>
                <div class="card carousel-item col-2 border px-2 text-left" style={itemStyle}>
                    <img src="..." class="card-img-top img-thumbnail h-50 d-block" alt="..."/>
                    <div class="card-body p-0">
                      <h5 class="card-title m-0">Card title</h5>
                      <p class="card-text m-0">Some quick example</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="..." class="img-thumbnail rounded-circle mr-1" alt="..." />
                      <div> Username </div>
                    </div>
                </div>
                <div class="card carousel-item col-2 border px-2 text-left" style={itemStyle}>
                    <img src="..." class="card-img-top img-thumbnail h-50 d-block" alt="..."/>
                    <div class="card-body p-0">
                      <h5 class="card-title m-0">Card title</h5>
                      <p class="card-text m-0">Some quick example</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src="..." class="img-thumbnail rounded-circle mr-1" alt="..." />
                      <div> Username </div>
                    </div>
                </div>
                
                
              </div>
              <a class="carousel-control-prev w-auto h-auto" href="#carousel-example" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next w-auto h-auto" href="#carousel-example" role="button" data-slide="next">
                  <span class="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
              </a>
          </div>
        </div>
      )
  }
}