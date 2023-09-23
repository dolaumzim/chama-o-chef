import React from 'react';
import * as Styled from './styles'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <Styled.Input {...props}/>
  );
};

export default Input;
