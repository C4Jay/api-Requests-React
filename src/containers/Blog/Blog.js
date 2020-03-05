import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts : [],
        clickedPostid: null
    }

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
           const posts = response.data.slice(0, 4)
           const updatedPosts = posts.map(post => {
               return {
                   ...post,
                   userId : post.userId 
               }
           })
           this.setState({posts: updatedPosts});

        
        })
    }

    postClickedHandler = (id) => {
        this.setState({clickedPostid : id})
    }


    render () {

        const posts = this.state.posts.map(post => {
            return <Post key={post.id} clicked={() => this.postClickedHandler(post.id)} title={post.title} userId={post.userId}/>
        })


        return (
            <div>
                <section className="Posts">
                {posts}
                 </section>
                <section>
                    <FullPost id={this.state.clickedPostid}
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;