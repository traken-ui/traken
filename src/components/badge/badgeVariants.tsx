import { cva } from "class-variance-authority";

export const badgeVariants = cva(
 
  // `inline-flex items-center justify-center font-medium rounded-full transition whitespace-nowrap`,
  `inline-flex items-center justify-center font-medium transition-all duration-150 ease-in-out z-20`,
  {
    variants: {
      color: {
        base: "bg-base-100 text-base-900",
        primary: "bg-primary-100 text-primary-900",
        secondary: "bg-secondary-100 text-secondary-900",
        success: "bg-success-100 text-success-900",
        warning: "bg-warning-100 text-warning-900",
        danger: "bg-danger-100 text-danger-900",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-sm",
        lg: "px-4 py-1.5 text-base",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
      placement: {
        topRight:
          "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2",
        topLeft:
          "absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2",
        bottomRight:
          "absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2",
        bottomLeft:
          "absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2",
      },
      isDot: {
        true: "min-w-3 w-3 h-3 p-0",
        false: "",
      },
      isInvisible: {
        true: "opacity-0",
        false: "opacity-100",
      },
      variant: {
        solid: "",
        flat: "bg-opacity-20 hover:bg-opacity-30",
        faded: "bg-opacity-60 shadow-sm",
        shadow: "shadow-md",
      },
    },
    compoundVariants: [
      {
        color: "base",
        variant: "solid",
        className: "bg-base-500 text-white",
      },
      {
        color: "primary",
        variant: "solid",
        className: "bg-primary-500 text-white",
      },
      {
        color: "secondary",
        variant: "solid",
        className: "bg-secondary-500 text-white",
      },
      {
        color: "success",
        variant: "solid",
        className: "bg-success-500 text-white",
      },
      {
        color: "warning",
        variant: "solid",
        className: "bg-warning-500 text-white",
      },
      {
        color: "danger",
        variant: "solid",
        className: "bg-danger-500 text-white",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "secondary",
      size: "md",
      rounded: "md",
    },
  },
);

// const badgeVariants = cva(
 // `inline-flex items-center justify-center font-medium transition-all duration-150 ease-in-out z-20`,
//   "inline-flex items-center justify-center font-medium rounded-full transition whitespace-nowrap",
//   {
//     variants: {
//       variant: {
//         solid: "text-white",
//         bordered: "bg-white dark:bg-zinc-900 border",
//         light: "",
//         flat: "",
//         faded: "bg-opacity-20 border-opacity-30",
//         shadow: "shadow-lg",
//       },
//       color: {
//         primary: "bg-blue-600 border-blue-600",
//         secondary: "bg-purple-600 border-purple-600",
//         success: "bg-green-600 border-green-600",
//         warning: "bg-yellow-500 border-yellow-500",
//         danger: "bg-red-600 border-red-600",
//         default: "bg-gray-600 border-gray-600",
//       },
//       size: {
//         sm: "text-xs px-1 min-w-4 h-4",
//         md: "text-xs px-1 min-w-5 h-5",
//         lg: "text-sm px-2 min-w-6 h-6",
//       },
//       placement: {
//         "top-right": "-translate-y-1/2 translate-x-1/2 top-0 right-0",
//         "top-left": "-translate-y-1/2 -translate-x-1/2 top-0 left-0",
//         "bottom-right": "translate-y-1/2 translate-x-1/2 bottom-0 right-0",
//         "bottom-left": "translate-y-1/2 -translate-x-1/2 bottom-0 left-0",
//       },
//       isDot: {
//         true: "min-w-3 w-3 h-3 p-0",
//         false: "",
//       },
//       isInvisible: {
//         true: "opacity-0",
//         false: "opacity-100",
//       },
//     },
//     compoundVariants: [
//       {
//         variant: "light",
//         color: "primary",
//         class: "bg-blue-100 text-blue-800 border-blue-100 dark:bg-blue-900 dark:text-blue-100",
//       },
//       {
//         variant: "light",
//         color: "secondary",
//         class: "bg-purple-100 text-purple-800 border-purple-100 dark:bg-purple-900 dark:text-purple-100",
//       },
//       {
//         variant: "light",
//         color: "success",
//         class: "bg-green-100 text-green-800 border-green-100 dark:bg-green-900 dark:text-green-100",
//       },
//       {
//         variant: "light",
//         color: "warning",
//         class: "bg-yellow-100 text-yellow-800 border-yellow-100 dark:bg-yellow-900 dark:text-yellow-100",
//       },
//       {
//         variant: "light",
//         color: "danger",
//         class: "bg-red-100 text-red-800 border-red-100 dark:bg-red-900 dark:text-red-100",
//       },
//       {
//         variant: "light",
//         color: "default",
//         class: "bg-gray-100 text-gray-800 border-gray-100 dark:bg-gray-800 dark:text-gray-100",
//       },
//       {
//         variant: "flat",
//         color: "primary",
//         class: "bg-blue-100 text-blue-800 border-transparent dark:bg-blue-900/30 dark:text-blue-400",
//       },
//       {
//         variant: "flat",
//         color: "secondary",
//         class: "bg-purple-100 text-purple-800 border-transparent dark:bg-purple-900/30 dark:text-purple-400",
//       },
//       {
//         variant: "flat",
//         color: "success",
//         class: "bg-green-100 text-green-800 border-transparent dark:bg-green-900/30 dark:text-green-400",
//       },
//       {
//         variant: "flat",
//         color: "warning",
//         class: "bg-yellow-100 text-yellow-800 border-transparent dark:bg-yellow-900/30 dark:text-yellow-400",
//       },
//       {
//         variant: "flat",
//         color: "danger",
//         class: "bg-red-100 text-red-800 border-transparent dark:bg-red-900/30 dark:text-red-400",
//       },
//       {
//         variant: "flat",
//         color: "default",
//         class: "bg-gray-100 text-gray-800 border-transparent dark:bg-gray-800/30 dark:text-gray-400",
//       },
//       {
//         variant: "bordered",
//         color: "primary",
//         class: "text-blue-600 dark:text-blue-400",
//       },
//       {
//         variant: "bordered",
//         color: "secondary",
//         class: "text-purple-600 dark:text-purple-400",
//       },
//       {
//         variant: "bordered",
//         color: "success",
//         class: "text-green-600 dark:text-green-400",
//       },
//       {
//         variant: "bordered",
//         color: "warning",
//         class: "text-yellow-600 dark:text-yellow-400",
//       },
//       {
//         variant: "bordered",
//         color: "danger",
//         class: "text-red-600 dark:text-red-400",
//       },
//       {
//         variant: "bordered",
//         color: "default",
//         class: "text-gray-600 dark:text-gray-400",
//       },
//     ],
//     defaultVariants: {
//       variant: "solid",
//       color: "primary",
//       size: "md",
//       placement: "top-right",
//       isDot: false,
//       isInvisible: false,
//     },
//   }
// );




