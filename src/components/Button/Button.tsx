import React, { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`${styles.btn} ${className ? className : ''}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
