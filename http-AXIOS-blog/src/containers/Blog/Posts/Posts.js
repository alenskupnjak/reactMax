import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

export class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get('/posts')
      .then((res) => {

        const posts = res.data.slice(0, 5);
        const updatePosts = posts.map((post) => {
          return {
            ...post,
            author: 'slon',
          };
        });
        this.setState({ posts: updatePosts });
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  postSelected = (id) => {
    this.setState({ selectedPostId: id });
    // this.props.history.push( '/posts/' + id );
  };

  render() {
    // console.log( this.props.match);
    // console.log( this.props.match.url);
  
    const post = this.state.posts.map((data) => {
      return (
        <NavLink key={data.id} to={'/posts/' + data.id}>
          <Post
            className='Posts'
            key={data.id}
            title={data.title}
            author={data.author}
            clicked={() => this.postSelected(data.id)}
          />
        </NavLink>
      );
    });

    return (
      <div>
        <section className='Posts'>
          {post}
        </section>
        <Route path={this.props.match.url + '/:id'} exact component={FullPost}></Route>
      </div>
    );
    
  }

  
}

export default Posts;
