import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();
    }

    loadData() {
        if (this.props.match.params.id !== null) {
            if ((this.state.loadedPost === null ) || (this.state.loadedPost !== null && this.state.loadedPost.id != this.props.match.params.id)) {
                axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
                .then(response => this.setState({loadedPost: response.data}));
            }
        }
    }

    handleDeletePost = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
            .then(response => console.log(response));
    }

    render () {
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if (this.props.match.params.id !== null) {
            post = <p style={{textAlign: 'center'}}>Loading...</p>;
        }
        if (this.state.loadedPost !== null) {
            post = (
            <div className="FullPost">
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete" onClick={this.handleDeletePost}>Delete</button>
                </div>
            </div>
         );
        }
        return post;
    }
}

export default FullPost;