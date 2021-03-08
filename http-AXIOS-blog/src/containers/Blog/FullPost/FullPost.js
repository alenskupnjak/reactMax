import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.location);
    console.log(this.props.match.params.id);
    
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        axios.get(`/posts/${this.props.match.params.id}`).then((res) => {
          console.log(res);

          this.setState({ loadedPost: res.data });
        });
      }
    }
  }

  deletePost = () => {
    console.log('DELETE', this.props);
    axios.delete(`/posts/${this.props.id}`).then((res) => {
      console.log(res);
    });
  };

  render() {
    let post = <p style={{ textAlign: 'center' }}>Select post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading!</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className='Edit'>
            <button onClick={this.deletePost} className='Delete'>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
