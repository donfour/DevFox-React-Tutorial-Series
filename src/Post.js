import React, { Component } from 'react';

class Post extends Component {
  render() {
    return <h1>{'Blog ' + this.props.match.params.postid}</h1>
  }
}

export default Post;
