import React, { Component } from 'react';
import BlogPage from '../Blog';


class BlogContainer extends Component {
  state = {blogs : undefined };

  componentDidMount() {
    fetch('api/blogs')
      .then(res => res.json())
      .catch(error => console.error('Error:', error)) // eslint-disable-line no-console
      .then(response => this.setState({blogs : response.posts}));
  }

  render() {
    return <BlogPage blogs={this.state.blogs} />;
  }
}

export default BlogContainer;
