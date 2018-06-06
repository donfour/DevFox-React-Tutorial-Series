import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Blog extends Component {

  render() {
    return (
      <div>
        <h1>Blog</h1>
        <ol>
          <li><Link to='/blog/1'>Blog 1</Link></li>
          <li><Link to='/blog/2'>Blog 2</Link></li>
          <li><Link to='/blog/3'>Blog 3</Link></li>
        </ol>
      </div>
    );
  }

}

export default Blog;
