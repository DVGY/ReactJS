import './button.scss';
import React from 'react';

const Button = ({ children, isGoogleSingIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSingIn ? 'is-google-sign-in' : ''} custom-btn`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
