import React from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { Header, Headline, Button, ListItem } from './components';
import { fetchPosts } from './actions';

import './app.scss';

const App = ({ fetchPosts }) => {
  const posts = useSelector(state => state.posts);

  const getPosts = () => {
    fetchPosts();
  };

  const buttonProps = {
    buttonText: 'Get posts!',
    onClick: getPosts
  };

  return (
    <div>
      <Header />
      <section>
        <Headline title='Posts' description='Click button to see more posts' />
        <Button {...buttonProps} />
        {posts.length > 0 &&
          posts.map(({ title, body, id }) => (
            <ListItem key={id} {...{ title }} description={body} />
          ))}
      </section>
    </div>
  );
};

App.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func
};

export default connect(null, { fetchPosts })(App);
