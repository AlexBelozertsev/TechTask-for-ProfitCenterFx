import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

const Button = ({ type, onClick, name }) => {
  return (
    <button className='Button' tabIndex="0" type={type} onClick={onClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default Button;
