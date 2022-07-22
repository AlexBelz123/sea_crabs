import React from 'react';
import styles from './select.module.scss';

interface SelectProps {
  label: string;
  options: string[];
  handleSelect: (m: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, handleSelect }) => {
  return (
    <div>
      <label htmlFor={label}></label>
      <select
        name={label}
        className={styles.select}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          handleSelect(e.target.value)
        }
      >
        {options.map((option, i) => (
          <option key={option + i} className={styles.option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
