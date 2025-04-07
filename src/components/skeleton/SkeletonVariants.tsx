import { cva } from 'class-variance-authority';

export const skeletonVariants = cva(
  `animate-pulse`, 
  {
    variants: {
      speed: {
        slow: 'duration-1000',
        normal: 'duration-500',
        fast: 'duration-250',
      },
      color: {
        light: 'bg-gray-200',
        dark: 'bg-gray-600',
        primary: 'bg-primary-200',
        secondary: 'bg-secondary-200',
      },
      isLoading: { 
        true: '', 
        false: 'opacity-0',
      },
      disableAnimation: {
        true: 'animate-none',
        false: 'animate-pulse',
      },
    },
    defaultVariants: {
      speed: 'normal',
      color: 'light',
      isLoading: true, 
      disableAnimation: false,
    },
  }
);