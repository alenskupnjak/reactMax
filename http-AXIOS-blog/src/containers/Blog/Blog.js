import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  state = {
    post: [],
    selectedPostId: null,
  };

  componentDidMount() {
    axios.get('/posts').then((res) => {
      const posts = res.data.slice(0, 8);
      const updatePosts = posts.map((post) => {
        return {
          ...post,
          author: 'alen',
        };
      });
      this.setState({ post: updatePosts });
      console.log(res);
    });
  }

  postSelected = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    console.log(this.state.post);

    const post = this.state.post.map((data) => {
      return (
        <Post
          // className='Posts'
          key={data.id}
          title={data.title}
          author={data.author}
          clicked={() => this.postSelected(data.id)}
        />
      );
    });

    return (
      <div  >
          <header className='Blog'>
              <nav>
                <ul>
                    <li> <a href="/">Home</a> </li>
                    <li> <a href="/new-post">New Post</a></li>
                </ul>
              </nav>
          </header>
          <section className='Posts'>
           {post}
          </section>
          <section>
              <FullPost id={this.state.selectedPostId} />
           </section>
        <section>
           <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
