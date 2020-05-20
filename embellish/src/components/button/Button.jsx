import './button.scss';
import React from 'react';

const Button = ({ children, ...otherProps }) => {
  return (
    <button className="custom-btn" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
