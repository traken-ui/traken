import { cva } from 'class-variance-authority';

export const loaderVariants = cva('animate-spin rounded-full', {
  variants: {
    size: {
      sm: 'w-6 h-6',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16',

    },
    color: {
      base: 'text-gray-500',
      primary: 'text-primary',
      secondary: 'text-secondary',
      success: 'text-success',
      warning: 'text-warning',
      danger: 'text-danger',
    },
    lable:{},
    lableColor:{},
    type: {
      spinner: 'border-4 border-solid border-current border-t-transparent rounded-full animate-spin',
      dots: 'loader-dots ',
      neon : 'p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl'

    },
    
  },
  defaultVariants: {
    size: 'md',
    color: 'base',
    type:'spinner'
  },
});


// p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-700 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full


