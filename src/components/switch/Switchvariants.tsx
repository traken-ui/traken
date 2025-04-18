import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "relative object-center flex items-center cursor-pointer transition-all duration-300 ease-in-out",
  {
    variants: {
      size: {
        sm: "w-10 h-5",
        md: "w-12 h-6",
        lg: "w-14 h-7",
        xl: "w-16 h-8",
      },
      checked: {
        true: "bg-blue-500",
        false: "bg-gray-300",
      },
      color: {
        base: "bg-base",
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        warning: "bg-warning",
        danger: "bg-danger",
        transperent: "bg-transparent",
      },
    },
    compoundVariants: [
      {
        checked: false,
        className: "bg-transparent border border-gray-600 dark:border-gray-300",
      },
    ],
    defaultVariants: {
      size: "md",
      checked: true,
      color: "primary",
    },
  },
);
