import React, { Component } from 'react';
import Posts from './Posts/Posts';
import { Route } from 'react-router-dom';

// npx react-codemod rename-unsafe-lifecycles
import './Blog.css';

class Blog extends Component {

  render() {
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
          {/* <Route path="/" exact render={()=><h1>Home</h1>}></Route>
          <Route path="/" render={()=><h1>Home 2</h1>}></Route> */}
          <Route path="/" exact component={Posts}></Route>
      </div>
    );
  }
}

export default Blog;
