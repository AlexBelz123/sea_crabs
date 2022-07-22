import React from 'react';
import Header from './Header/Header';
import styles from './layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default Layout;
