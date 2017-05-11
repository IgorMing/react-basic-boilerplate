import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background: blue;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  font-size: 18px;
  padding: 5px 20px;
`;

const Button = ({ children, onClick }) =>
  <ButtonStyled onClick={onClick}>
    {children}
  </ButtonStyled>;

export default Button;
