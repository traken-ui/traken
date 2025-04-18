import React from 'react';
import { cn } from '../../lib/utils';
import { alertVariants } from './Alertvariant';

interface AlertProps {
    children: React.ReactNode;
    className?: string;
    color?: 'success' | 'warning' | 'danger' | 'secondary' | 'primary';
    rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    shadow?: 'sm' | 'md' | 'lg' | 'xl';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'solid' | 'flat' | 'bordered' | 'faded';
}

const Alert: React.FC<AlertProps> = ({
    children,
    className,
    color,
    rounded,
    shadow,
    size,
    variant
}) => {
    return (
        <div
            className={cn(
                "relative flex items-center justify-between w-full mx-auto p-4 text-gray-800 transition-all duration-300",
                alertVariants({ color, rounded, shadow, size, variant }),
                className
            )}
        >
            <span className="flex-grow w-96">{children}</span>
        </div>
    );
};

export default Alert;

