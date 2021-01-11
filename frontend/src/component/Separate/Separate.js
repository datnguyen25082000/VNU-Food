import React, { Component } from 'react';

export default class Separate extends Component {
    render() {
        return (
            <div className="mt-1">
                <p className="m-0">{this.props.title}</p>
                <hr className="mb-1 mt-0 border-dark"/>
            </div>
        )
    }
}