import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/authform"></Link>
    </div>
  );
};

export default Header;
