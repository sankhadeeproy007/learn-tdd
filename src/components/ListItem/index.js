import React from 'react';
import PropTypes from 'prop-types';

import PostLoader from '../Loaders/PostLoader';

export const ListItem = ({ title, description, loading }) => {
  if (loading) {
    return <PostLoader test-id='loader' />;
  }
  return (
    <div test-id='listitem'>
      <h2 test-id='title'>{title}</h2>
      <p test-id='description'>{description}</p>
    </div>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  loading: PropTypes.bool
};
