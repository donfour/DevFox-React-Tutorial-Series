import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Blog from './Blog';
import Post from './Post';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
        </ul>
          <Switch>
            <Route exact path='/blog' component={Blog}/>
            <Route path='/blog/:postid' component={Post}/>
          </Switch>
      </div>
    )
  }
}

export default App;
