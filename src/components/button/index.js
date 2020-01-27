import React from 'react';
import './styles.scss';
import { ButtonContainer } from './styles';

const Button = ({children, ...props}) => (
  <ButtonContainer {...props}>
    {children}
  </ButtonContainer>
);

export default Button;
