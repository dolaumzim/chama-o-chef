import React from 'react';
import * as Styled from './styles'

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (
  props
) => {
  return (
    <Styled.InputArea>
      <Styled.Input
        {...props}
      />
    </Styled.InputArea>
  );
};

export default Input;
