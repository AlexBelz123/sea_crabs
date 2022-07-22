import React from 'react';
import styles from './tooltip.module.scss';

interface TooltipProps {
  title: string;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ title, children }) => {
  return (
    <div className={styles.tooltip} title={title}>
      {children}
    </div>
  );
};

export default Tooltip;
