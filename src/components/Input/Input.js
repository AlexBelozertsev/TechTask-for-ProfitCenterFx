import React from 'react';
import './Input.css';
import PropTypes from 'prop-types';

const Input = ({ type, name, value, id, placeholder, onChange }) => (
  <input
    type={type}
    name={name}
    value={value}
    id={id}
    placeholder={placeholder}
    onChange={onChange}
    tabIndex="0"
  />
);

Input.defaultProps = {
  id: null,
  placeholder: null,
};

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Input;
