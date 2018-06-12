import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Blog from './Blog';
import Post from './Post';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/blog' component={Blog} />
          <Route path='/blog/:postid' component={Post} />
        </Switch>
      </div>
    );
  }

}

export default App;
