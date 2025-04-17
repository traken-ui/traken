import { cva } from "class-variance-authority";

export const tooltipVariants = cva(
  "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-md transition-opacity duration-500 transition-all ",
  {
    variants: {
      color: {
        base: "bg-base text-white shadow-base-200",
        primary: "bg-primary text-white shadow-primary-200",
        secondary: "bg-secondary text-white shadow-secondary-200",
        success: "bg-success text-white shadow-success-200",
        warning: "bg-warning text-white shwdow-warning-200",
        danger: "bg-danger text-white shadow-danger-200",
        light: "bg-white text-gray-900 shadow-light-200",
        dark: "bg-black text-white shadow-dark-100",
      },
      position: {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
      },
      size: {
        sm: "text-xs px-2 py-1 ",
        md: "text-sm px-3 py-2",
        lg: "text-lg px-4 py-2",
        xl: "text-xl px-5 py-3",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
      },
      variant: {
        solid: "",
        outline: "border bg-transparent text-gray-500",
        ghost: "bg-transparent text-gray-500",
      },
    },

    compoundVariants: [
      {
        position: ["top", "bottom"],
        className: "shadow-none",
      },
    ],

    defaultVariants: {
      color: "base",
      position: "top",
      size: "md",
      radius: "md",
      shadow: "sm",
    },
  },
);
