import React, { useRef } from 'react';
import { cn } from '../../lib/utils';
import { badgeVariants } from './badgeVariants'; 


export interface BadgeProps  {
  children?: React.ReactNode;
  className?: string;
  color?: 'base' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'sm'|'md'|'lg'|'xl'|'full';
  placement?:'topRight'|'topLeft'|'bottomRight'|'bottomLeft';
  variant?: 'solid' | 'flat' | 'faded' | 'shadow';
}

const Badge = (
  (
    {
      children,
      className,
      variant,
      size,
      color,
      rounded,
      placement,
      ...props
    }:BadgeProps,
    
  ) => {
    const badgeRef = useRef(null)
    return (
      <span
        className={cn(
          badgeVariants({
            color,
            size,
            rounded,
            placement,
            variant,
          }),
          className
        )}
       ref={badgeRef}
        {...props}
      >
        {children}
      </span>
    );
  }
);


export default Badge;