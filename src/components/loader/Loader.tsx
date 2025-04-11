import React from 'react';
import { cn } from '../../lib/utils';
import { loaderVariants } from './LoaderVariants';
// Import as a module with default export
import styles from './styles/Loader.module.css';

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'base' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  type?: 'spinner' | 'dots';
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 'md', color = 'base', type = 'spinner', className }) => {
  return (
    <div className={cn(loaderVariants({ size, color, type }), className)}>
      {type === 'dots' ? (
        <div className={styles['dot-spinner']}>
          {[...Array(8)].map((_, i) => (
            <div key={i} className={styles.dot}></div>
          ))}
        </div>
      ) : (
        <div className={styles['loader-spinner']}></div>
      )}
    </div>
  );
};

export default Loader;
