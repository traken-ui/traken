import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  `relative overflow-hidden text-black duration-150 ease-in-out active:scale-95 disabled:opacity-50`,
  {
    variants: {
      color: {
        base: 'bg-base text-white hover:bg-base-600',
        primary: 'bg-primary text-white hover:bg-primary-600',
        secondary: 'bg-secondary text-white hover:bg-secondary-600',
        success: 'bg-success text-white hover:bg-success-600',
        warning: 'bg-warning text-black hover:bg-warning-600',
        danger: 'bg-danger text-black hover:bg-danger-600',
      },
      size: {
        sm: 'px-3 py-1 h-fit text-sm',
        md: 'px-5 py-2 h-fit text-md',
        lg: 'px-7 py-3 h-fit text-lg',
        xl: 'px-9 py-4 h-fit text-xl',
      },
      rounded: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
        full: 'rounded-full',
      },
      variant: {
        solid: 'text-white',
        outline: 'bg-transparent outline outline-2 outline-offset-[-2px]',
        ghost: 'bg-transparent',
        flat: 'bg-opacity-20 hover:bg-opacity-30',
      },
    },
    compoundVariants: [
      {
        color: 'base',
        variant: 'outline',
        className:
          'border-base text-base hover:bg-base hover:text-white hover:outline-base',
      },
      {
        color: 'primary',
        variant: 'outline',
        className:
          'border-primary text-primary hover:bg-primary hover:text-white hover:outline-primary',
      },
      {
        color: 'secondary',
        variant: 'outline',
        className:
          'border-secondary text-secondary hover:bg-secondary hover:text-white hover:outline-secondary',
      },
      {
        color: 'success',
        variant: 'outline',
        className:
          'border-success text-success hover:bg-success hover:text-white hover:outline-success',
      },
      {
        color: 'warning',
        variant: 'outline',
        className:
          'border-warning text-warning hover:bg-warning hover:text-white hover:outline-warning',
      },
      {
        color: 'danger',
        variant: 'outline',
        className:
          'border-danger text-danger hover:bg-danger hover:text-white hover:outline-danger',
      },
      {
        color: 'base',
        variant: 'ghost',
        className: 'text-base hover:bg-base',
      },
      {
        color: 'primary',
        variant: 'ghost',
        className: 'text-primary hover:bg-primary',
      },
      {
        color: 'secondary',
        variant: 'ghost',
        className: 'text-secondary hover:bg-secondary',
      },
      {
        color: 'success',
        variant: 'ghost',
        className: 'text-success hover:bg-success',
      },
      {
        color: 'warning',
        variant: 'ghost',
        className: 'text-warning hover:bg-warning',
      },
      {
        color: 'danger',
        variant: 'ghost',
        className: 'text-danger hover:bg-danger',
      },
      {
        color: 'base',
        variant: 'ghost',
        className: 'text-base hover:bg-base hover:bg-opacity-10',
      },
      {
        color: 'primary',
        variant: 'ghost',
        className: 'text-primary hover:bg-primary hover:bg-opacity-10',
      },
      {
        color: 'secondary',
        variant: 'ghost',
        className: 'text-secondary hover:bg-secondary hover:bg-opacity-10',
      },
      {
        color: 'success',
        variant: 'ghost',
        className: 'text-success hover:bg-success hover:bg-opacity-10',
      },
      {
        color: 'warning',
        variant: 'ghost',
        className: 'text-warning hover:bg-warning hover:bg-opacity-10',
      },
      {
        color: 'danger',
        variant: 'ghost',
        className: 'text-danger hover:bg-danger hover:bg-opacity-10',
      },
      {
        color: 'base',
        variant: 'flat',
        className: 'text-base',
      },
      {
        color: 'primary',
        variant: 'flat',
        className: 'text-primary',
      },
      {
        color: 'secondary',
        variant: 'flat',
        className: 'text-secondary',
      },
      {
        color: 'success',
        variant: 'flat',
        className: 'text-success',
      },
      {
        color: 'warning',
        variant: 'flat',
        className: 'text-warning',
      },
      {
        color: 'danger',
        variant: 'flat',
        className: 'text-danger',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      size: 'md',
      color: 'base',
      rounded: 'md',
    },
  }
);
