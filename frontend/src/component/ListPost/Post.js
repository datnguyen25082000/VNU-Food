import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        return (
          <div class="card mb-3">
              <div class="card-header">
                  Header
              </div>
              <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Text</p>
              </div>
              <div class="card-footer text-muted">
                  Footer
              </div>
          </div>
        )
    }
}
