import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Header, Headline, Button, ListItem } from './components';
import { fetchPosts } from './actions';

import './app.scss';

export const App = ({ posts, fetchPosts }) => {
  const getPosts = () => {
    fetchPosts();
  };

  const buttonProps = {
    buttonText: 'Get posts!',
    onClick: getPosts
  };

  return (
    <div test-id='app'>
      <Header />
      <section>
        <Headline title='Posts' description='Click button to see more posts' />
        {posts.length === 0 ? (
          <Button {...buttonProps} test-id='button' />
        ) : (
          posts.map(({ title, body, id }) => (
            <ListItem key={id} {...{ title }} description={body} />
          ))
        )}
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

App.propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func
};

export default connect(mapStateToProps, { fetchPosts })(App);
