import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state = {
        post : null
    }

    componentDidUpdate() {
        if(this.props.id) {
            if(this.state.post && this.state.post.id == this.props.id){
                return
            }
            axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
            .then(response => {
                this.setState({post : response.data})
                console.log(response.data)
                console.log(this.state.post)
            })}
    }


    render () {
        const postspecific = {
            ...this.state.post
        }
        let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
        if(this.props.id) {
            post = (
            <div className="FullPost">
                <h1>{postspecific.title}</h1>
                <p>{postspecific.body}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
    }
        return post;
        
        
    }
}

export default FullPost;