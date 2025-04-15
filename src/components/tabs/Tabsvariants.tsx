import { cva } from "class-variance-authority";

export const tabsVariants = cva(
  "relative inline-flex items-center justify-center flex-col whitespace-nowrap transition-all focus:outline-none disabled:opacity-50 duration-300",
  {
    variants: {
      variant: {
        solid: "",
        bordered: "border",
        light: "bg-transparent",
        underlined: "pb-1 border-b-transparent",
      },

      color: {
        default: "bg-base",
        primary: "bg-primary",
        secondary: "bg-secondary",
        success: "bg-success",
        warning: "bg-warning",
        danger: "bg-danger",
      },

      size: {
        sm: "text-sm px-2 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
      },

      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },

      isSelected: {
        true: "font-semibold",
        false: "opacity-70",
      },
    },

    defaultVariants: {
      variant: "solid",
      color: "default",
      size: "md",
      radius: "md",
    },
  },
);