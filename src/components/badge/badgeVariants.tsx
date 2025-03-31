import { cva } from 'class-variance-authority';

export const badgeVariants = cva(
  `inline-flex items-center font-medium duration-150 ease-in-out z-50`,
  {
    variants: {
      color: {
        base: 'bg-base-100  text-base-900',
        primary: 'bg-primary-100  text-primary-900',
        secondary: 'bg-secondary-100  text-secondary-900',
        success: 'bg-success-100  text-success-900',
        warning: 'bg-warning-100  text-warning-900',
        danger: 'bg-danger-100  text-danger-900',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
        lg: 'px-4 py-1.5 text-md',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
      placement: {
        topRight: 'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
        topLeft: 'absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2',
        bottomRight: 'absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2',
        bottomLeft: 'absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2',
      },
      variant: {
        solid: 'text-white',
        flat: 'bg-opacity-20 hover:bg-opacity-30',
        faded: 'shadow-md shadow-black/20',
        shadow: 'shadow-md', 
      },
    },
    compoundVariants: [
      {
        color: 'base',
        variant: 'flat',
        className: 'bg-base-100 text-base-900',
      },
      {
        color: 'primary',
        variant: 'flat',
        className: 'bg-primary-100 text-primary-900',
      },
      {
        color: 'secondary',
        variant: 'flat',
        className: 'bg-secondary-100 text-secondary-900',
      },
      {
        color: 'success',
        variant: 'flat',
        className: 'bg-success-100 text-success-900',
      },
      {
        color: 'warning',
        variant: 'flat',
        className: 'bg-warning-100 text-warning-900',
      },
      {
        color: 'danger',
        variant: 'flat',
        className: 'bg-danger-100 text-danger-900',
      },
      {
        color: 'base',
        variant: 'faded',
        className: 'bg-base-100 text-base-900',
      },
      {
        color: 'primary',
        variant: 'faded',
        className: 'bg-primary-100 text-primary-900',
      },
      {
        color: 'secondary',
        variant: 'faded',
        className: 'bg-secondary-100 text-secondary-900',
      },
      {
        color: 'success',
        variant: 'faded',
        className: 'bg-success-100 text-success-900',
      },
      {
        color: 'warning',
        variant: 'faded',
        className: 'bg-warning-100 text-warning-900',
      },
      {
        color: 'danger',
        variant: 'faded',
        className: 'bg-danger-100 text-danger-900',
      },
      {
        color: 'base',
        variant: 'shadow',
        className: 'bg-base-100 text-base-900',
      },
      {
        color: 'primary',
        variant: 'shadow',
        className: 'bg-primary-100 text-primary-900',
      },
      {
        color: 'secondary',
        variant: 'shadow',
        className: 'bg-secondary-100 text-secondary-900',
      },
      {
        color: 'success',
        variant: 'shadow',
        className: 'bg-success-100 text-success-900',
      },
      {
        color: 'warning',
        variant: 'shadow',
        className: 'bg-warning-100 text-warning-900',
      },
      {
        color: 'danger',
        variant: 'shadow',
        className: 'bg-danger-100 text-danger-900',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'secondary',
      size: 'md',
      rounded: 'md',
      placement:'topRight',
    },
  }
);