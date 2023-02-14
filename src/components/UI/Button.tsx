import React from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
  className: 'btn-search' | 'btn-lg' | 'btn-save' | 'btn-danger';
}

export const Button: React.FC<ButtonProps> = ({ children, className, onClick, ...props }) => {
  const cn = 'btn' + ' ' + className;
  return (
    <button className={cn} onClick={onClick} {...props}>
      {children}
    </button>
  );
};
