import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
// npx react-codemod rename-unsafe-lifecycles
import Posts from './Posts/Posts';

import NewPost from './NewPost/NewPost';


class Blog extends Component {
  render() {
    return (
      <div>
        <header className='Blog'>
          <nav>
            <ul>
              <li>
                {' '}
                <NavLink
                  to='/posts/'
                  exact
                  activeClassName='moj-active'
                  activeStyle={{
                    color: 'green',
                    textDecoration: 'underline',
                  }}
                >
                  Home
                </NavLink>{' '}
              </li>
              <li>
                {' '}
                <NavLink
                  to={{
                    pathname: '/new-post/',
                    hash: 'submit',
                    search: '?jedan-primjer',
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path='/new-post' component={NewPost}></Route>
          <Route path='/posts' component={Posts}></Route>
          <Redirect from="/" to="posts"></Redirect>
        </Switch>
      </div>
    );
  }
}

export default Blog;
