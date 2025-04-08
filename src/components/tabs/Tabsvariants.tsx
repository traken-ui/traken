import { cva } from 'class-variance-authority';

export const tabsVariants = cva(
  'relative  inline-flex items-center justify-center flex-col whitespace-nowrap transition-colors focus:outline-none disabled:opacity-50',
  {
    variants: {
      variant: {
        solid: '',
        bordered: 'border',
        light: 'bg-transparent',
        underlined: ' rounded-none',
      },
      color: {
        default: 'text-default',
        primary: 'bg-primary',
        secondary: 'text-secondary',
        success: 'text-success',
        warning: 'text-warning',
        danger: 'text-danger',
      },
      size: {
        sm: 'text-sm px-2 py-1',
        md: 'text-base px-4 py-2',
        lg: 'text-lg px-6 py-3',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      fullWidth: {
        true: 'flex-1',
        false: '',
      },
      isSelected: {
        true: 'font-semibold',
        false: 'opacity-70',
      },
    },
    
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'md',
      radius: 'md',
    },
  }
);
