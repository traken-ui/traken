import { cva } from "class-variance-authority";

export const breadcrumbVariants = cva("flex flex-wrap items-center gap-2", {
  variants: {
    color: {
      default: "text-base",
      primary: "text-primary",
      secondary: "text-secondary",
      success: 'text-success',
      danger: 'text-danger',
      warning: 'text-warning',
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

export const breadcrumbItemVariants = cva(
  "transition-colors duration-200",
  {
    variants: {
      active: {
        true: "font-semibold text-base-900",
        false: "hover:text-primary-500 hover:underline",
      },
    },
  }
);