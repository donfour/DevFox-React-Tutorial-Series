import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
      <div>
        <h1>Post</h1>
        {this.props.match.params.postid}
      </div>
    );
  }

}

export default Post;
