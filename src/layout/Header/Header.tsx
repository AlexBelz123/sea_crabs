import React from 'react';
import styles from './header.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { routes, IRoute } from '../routes';

const Header = () => {
  const { pathname } = useLocation();
  const [activeRoute, setActiveRoute] = React.useState(() =>
    routes.find((route) => (pathname === '/' ? route : route.path === pathname))
  );

  const handleClick = (route: IRoute) => {
    setActiveRoute(route);
  };

  return (
    <div className={styles.header}>
      <ul className={styles.list}>
        {routes.slice(0, -1).map((route, i) => (
          <Link
            key={i + route.path}
            to={route.path}
            className={
              styles.dot +
              `${route.path === activeRoute?.path ? ' ' + styles.active : ' '}`
            }
            onClick={() => handleClick(route)}
          />
        ))}
      </ul>
      <p>{activeRoute?.name}</p>
    </div>
  );
};

export default Header;
