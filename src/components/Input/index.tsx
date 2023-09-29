import React from 'react';
import * as Styled from './styles'

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <Styled.Input {...props}/>
  );
};
