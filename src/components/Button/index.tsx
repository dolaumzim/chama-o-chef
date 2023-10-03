import React from 'react';

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  loading? : boolean;
}

export const Button : React.FC<ButtonProps> = ({loading, ...props}) => {
  return <button 
  {...props}/>;
};