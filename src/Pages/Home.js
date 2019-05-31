import React, { Fragment } from 'react';
import axios from 'axios';
import Post from '../components/Post';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
      .then((posts) => this.setState({
        posts,
      }))
  }

  render() {
    return (
      <Fragment>
          <h1>Current posts</h1>
          {this.state.posts.map((post) => (<Post title={post.title} body={post.body} />))}
      </Fragment>
    );
  }
}
export default Home;