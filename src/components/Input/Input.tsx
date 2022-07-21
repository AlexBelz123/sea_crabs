import React from 'react';
import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMsg?: string | null;
}

const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  errorMsg,
  ...props
}) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={'current-' + label}>{label}</label>
      <input
        id={'current-' + label}
        name={type}
        type={type}
        onChange={onChange}
        {...props}
      />
      {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
    </div>
  );
};

export default Input;
