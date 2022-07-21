import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { routes } from '../routes';

const Header = () => {
  const [activeRoute, setActiveRoute] = React.useState(routes[0]);

  const handleClick = (route: any) => {
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
              `${route.path === activeRoute.path ? ' ' + styles.active : ' '}`
            }
            onClick={() => handleClick(route)}
          />
        ))}
      </ul>
      <p>{activeRoute.name}</p>
    </div>
  );
};

export default Header;
