import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div className='col-md-6 p-lg-5 m-auto py-3'>
                <div type='button' class="card shadow rounded">
                    <div class="card-header">
                        <div className="d-flex ">
                            <img src={require('../../assets/images/image.jpg')} alt="User's image" className='rounded-circle' width="50" height="50"></img>
                            <h4 class=" mx-3 userName my-auto">
                                <span class='font-bold'
                                    style={{ color: 'rgb(123, 234, 253)', textShadow: '1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue' }}>User Name
                                </span>
                            </h4>
                            <button className='btn btn-danger ml-auto'><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Report</button>
                        </div>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Title</h4>
                        <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolores architecto quam, aliquam omnis inventore! Aliquid ad facilis dolor, exercitationem est iure? Earum laudantium, assumenda nemo ea recusandae porro voluptatem!</p>


                    </div>
                    <div className='card-footer'>
                        <div class="rate-comment">

                            <div class="rate">
                                <label >
                                    <input type="radio" id="star1" name="rate" value="1" className='mr-2 d-none' />
                                    <span >
                                        <div type='button' className='mr-3' data-toggle="tooltip" data-placement="top" title="1 star">
                                            <i class="fas fa-angry fa-2x "></i>
                                        </div>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" id="star2" name="rate" value="2" className='mr-2 d-none' />
                                    <span>
                                        <div type='button' className='mr-3' data-toggle="tooltip" data-placement="top" title="2 star">
                                            <i class="fa fa-meh fa-2x " aria-hidden="true"></i>
                                        </div>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" id="star3" name="rate" value="3" className='mr-2 d-none' />
                                    <span>
                                        <div type='button' className='mr-3' data-toggle="tooltip" data-placement="top" title="3 star">
                                            <i class="fas fa-surprise fa-2x "></i>
                                        </div>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" id="star4" name="rate" value="4" className='mr-2 d-none' />
                                    <span>
                                        <div type='button' className='mr-3' data-toggle="tooltip" data-placement="top" title="4 star">
                                            <i class="fas fa-grin-tongue fa-2x "></i>
                                        </div>
                                    </span>
                                </label>
                                <label>
                                    <input type="radio" id="star5" name="rate" value="5" className='mr-2 d-none' />
                                    <span>
                                        <div type='button' className='mr-3' data-toggle="tooltip" data-placement="top" title="5 star">
                                            <i class="fas fa-grin-stars  fa-2x "></i>
                                        </div>
                                    </span>
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
