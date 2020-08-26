import './button.scss';
import React from 'react';

const Button = ({ children, isGoogleSingIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSingIn ? 'is-google-sign-in' : ''} ${
        inverted ? 'inverted' : ''
      }
      custom-btn`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
