import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ buttonText, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button onClick={handleClick} test-id='button'>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};
