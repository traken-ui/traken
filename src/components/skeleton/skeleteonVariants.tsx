// import { cva } from 'class-variance-authority';

// export const skeletonVariants = cva(
//   `animate-pulse`, 
//   {
//     variants: {
//       size: {
//         sm: 'w-16 h-4',
//         md: 'w-24 h-6',
//         lg: 'w-32 h-8',
//         xl: 'w-48 h-12',
//       },
//       shape: {
//         rectangle: 'rounded-md',
//         circle: 'rounded-full',
//         rounded: 'rounded-lg',
//       },
//       speed: {
//         slow: 'duration-1000',
//         normal: 'duration-500',
//         fast: 'duration-250',
//       },
//       color: {
//         light: 'bg-gray-200',
//         dark: 'bg-gray-600',
//         primary: 'bg-primary-200',
//         secondary: 'bg-secondary-200',
//       },
//       isLoading: { 
//         true: '', 
//         false: 'opacity-0',
//       },
//       disableAnimation: {
//         true: 'animate-none',
//         false: 'animate-pulse',
//       },
//     },
//     defaultVariants: {
//       size: 'md',
//       shape: 'rectangle',
//       speed: 'normal',
//       color: 'light',
//       isLoading: true, 
//       disableAnimation: false,
//     },
//   }
// );



import { cva } from 'class-variance-authority';

export const skeletonVariants = cva(
  `animate-pulse`, 
  {
    variants: {
      // size: {
      //   sm: 'w-4 h-4',
      //   md: 'w-8 h-8',
      //   lg: 'w-10 h-10',
      //   xl: 'w-16 h-16',
      // },
      // shape: {
      //   rectangle: 'rounded-md',
      //   circle: 'rounded-full',
      //   rounded: 'rounded-lg',
      // },
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
      // size: 'md',
      // shape: 'rectangle',
      speed: 'normal',
      color: 'light',
      isLoading: true, 
      disableAnimation: false,
    },
  }
);