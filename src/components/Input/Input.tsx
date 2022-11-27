import React, { useId } from 'react';
import styles from './input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMsg?: string | null;
}

// TODO 3
// TODO 9
const Input: React.FC<InputProps> = ({
  type,
  label,
  value,
  onChange,
  errorMsg,
  ...props
}) => {
  const id = useId();
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={type}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      {errorMsg && <p className={styles.errorMsg}>{errorMsg}</p>}
    </div>
  );
};

export default Input;
