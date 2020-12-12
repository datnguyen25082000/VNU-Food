import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
            <div class="card-post">
            <div class="userDetail">
              <img src="img_gl.jpg" alt="User's image" width="50" height="50"></img>
              <h4 class = "userName">User Name</h4>
              <img class="report" src="sdf.jpg" alt="Report" width="50" height="50"></img>
            </div>
            <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime dolores architecto quam, aliquam omnis inventore! Aliquid ad facilis dolor, exercitationem est iure? Earum laudantium, assumenda nemo ea recusandae porro voluptatem!</p>
            </div>
            <div class="rate-comment">
    
                <div class= "comment">
                    <button>comment</button>
                </div>
                <div class="rate">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
            </div>
    </div>
        )
    }
}
