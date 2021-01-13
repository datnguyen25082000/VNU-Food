import React, { Component } from 'react'
import Post from './Post';

export default class ListPost extends Component {
    render() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const listItems = arr.map((number) =>
            <Post />
        );
        return (
            <ul style={{padding: "20px"}}>{listItems}</ul>
        )
    }
}
