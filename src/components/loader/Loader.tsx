import React from 'react';
import { cn } from '../../lib/utils';
import { loaderVariants } from './LoaderVariants';
import './styles/Loader.module.css'

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
        <div className="dot-spinner">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="dot"></div>
          ))}
        </div>
      ) : (
        <div className="loader-spinner"></div>
      )}
    </div>
  );
};

export default Loader;
