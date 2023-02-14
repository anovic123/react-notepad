import React from 'react';

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ placeholder, value, onChange, ...props }) => {
  return <input placeholder={placeholder} value={value} onChange={onChange} autoFocus {...props} />;
};
