import React, { Component } from 'react';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';

import './Posts.css';




export class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios
      .get('/posts')
      .then((res) => {
        console.log('xxx');
        
        const posts = res.data.slice(0, 5);
        const updatePosts = posts.map((post) => {
          return {
            ...post,
            author: 'alen',
          };
        });
        this.setState({ posts: updatePosts });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  postSelected = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    const post = this.state.posts.map((data) => {
      return (
        <Post
          className="Posts"
          key={data.id}
          title={data.title}
          author={data.author}
          clicked={() => this.postSelected(data.id)}
        />
      );
    });

    return (
      <section className='Posts'>
        {post}
      </section>);
  }
}

export default Posts;
