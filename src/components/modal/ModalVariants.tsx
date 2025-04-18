import { cva } from "class-variance-authority";

export const modalVariants = cva(
  "relative flex flex-col transition-all duration-200",
  {
    variants: {
      color: {
        base: "bg-base text-gray-200",
        primary: "bg-primary text-gray-100",
        secondary: "bg-secondary text-gray-100",
        success: "bg-success text-gray-100",
        warning: "bg-warning text-black",
        danger: "bg-danger text-gray-100",
        transparent: "bg-transparent backdrop-blur-sm text-gray-100",
        light: "bg-white text-gray-900",
        dark: "bg-gray-900 text-gray-100",
      },
      size: {
        xs: "max-w-xs",
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-lg",
        xl: "max-w-xl",
        "2xl": "max-w-2xl",
        "3xl": "max-w-3xl",
        full: "max-w-full",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
        "2xl": "shadow-2xl",
        inner: "shadow-inner",
      },
      border: {
        none: "border-0",
        thin: "border border-gray-200",
        medium: "border-2 border-gray-300",
        thick: "border-4 border-gray-400",
      },
      animation: {
        none: "",
        fade: "animate-fade",
        scale: "animate-scale",
        slide: "animate-slide-up",
      },
      overlayColor: {
        dark: "bg-black/50",
        light: "bg-white/30",
        blur: "backdrop-blur-sm",
        none: "",
      },
    },
    compoundVariants: [
      {
        color: "transparent",
        className: "bg-white/10 backdrop-blur-md border border-white/20",
      },
    ],
    defaultVariants: {
      color: "base",
      size: "md",
      radius: "md",
      shadow: "lg",
      border: "none",
      animation: "fade",
    },
  },
);
