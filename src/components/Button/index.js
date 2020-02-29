import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const Button = ({ buttonText, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} test-id='button' className='button'>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};
