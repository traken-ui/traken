import React from 'react';
import { cn } from '../../lib/utils';
import { dividerVariants } from './Dividervariants';

export interface DividerProps {
    className?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'default';
    thickness?: 'thin' | 'medium' | 'thick';
    variant?: 'solid' | 'dashed' | 'dotted';
    spacing?: 'none' | 'sm' | 'md' | 'lg';
    orientation?: 'horizontal' | 'vertical';
}

const Divider: React.FC<DividerProps> = ({
    className,
    color = 'default',
    thickness = 'medium',
    variant = 'solid',
    spacing = 'md',
    orientation = 'horizontal',
}) => {
    const isVertical = orientation === 'vertical';

    return (
        <div
            className={cn(
                dividerVariants({ color, thickness, variant, spacing, orientation }),
                isVertical ? 'inline-block h-64 border-none self-stretch' : '',
                className
            )}
        />
    );
};

export default Divider;
