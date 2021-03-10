import React from 'react';

import styled from 'styled-components';

const Button = ({ clickHandler, label, type }) =>
  type === 'red' ? (
    <ButtonRed onClick={clickHandler}>{label}</ButtonRed>
  ) : (
    <ButtonBlack onClick={clickHandler}>{label}</ButtonBlack>
  );

export default Button;

const ButtonRed = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: red;
  border: 1px solid red;
  color: white;
`;

const ButtonBlack = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  background-color: black;
  border: 1px solid black;
  color: white;
`;
