import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const Headline = ({ title, description }) => {
  if (!title) {
    return null;
  }

  return (
    <div test-id='headline'>
      <h1 test-id='title'>{title}</h1>
      <p test-id='description'>{description}</p>
    </div>
  );
};

Headline.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
