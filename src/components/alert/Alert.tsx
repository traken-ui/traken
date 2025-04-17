import React, { useState } from 'react';
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
    const [isVisible, setIsVisible] = useState(false); 

    const showAlert = () => setIsVisible(true); 

    if (!isVisible) return (
        <button onClick={showAlert} className="btn btn-primary bg-red-500 p-2 rounded text-white ">
            Show Alert
        </button>
    ); 

    return (
        <div
            className={cn(
                "relative flex items-center justify-between w-full mx-auto p-4 text-gray-800 transition-all duration-300",
                alertVariants({ color, rounded, shadow, size, variant }),
                className
            )}
        >
            <span className="flex-grow w-96">{children}</span>
            <button
                className=" text-2xl ml-4 pt-0 text-gray-900 hover:text-black "
                onClick={() => setIsVisible(false)}
            >
                &times;
            </button>
        </div>
    );
};

export default Alert;
