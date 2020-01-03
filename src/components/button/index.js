import React from 'react';
import './styles.scss';

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} ${inverted ? 'inverted' : ''} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
