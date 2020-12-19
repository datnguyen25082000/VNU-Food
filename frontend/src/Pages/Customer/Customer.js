import React, { Component } from 'react'
import ListPost from '../../component/ListPost/ListPost';
import Header from '../../component/Header/Header'

export default class Customer extends Component {
    render() {
        return (
            <div >
                <Header />
                <ListPost />
            </div>
        )
    }
}
