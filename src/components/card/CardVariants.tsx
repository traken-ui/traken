import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "relative flex flex-col w-full p-2 rounded-lg shadow-md transition-all duration-300 ease-in-out",
  {
    variants: {
      color: {
        light: "bg-white text-gray-900",
        dark: "bg-black text-gray-100",
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
      },
      shadow: {
        none: "shadow-none",
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-lg",
        xl: "shadow-xl",
      },
    },

    compoundVariants: [
      {
        color: ["light", "dark"],
        className: "border-gray-200",
      },
      {
        size: ["sm", "md", "lg", "xl"],
        className: "transition-all duration-300 ease-in-out",
      },
      {
        radius: ["none", "sm", "md", "lg", "xl"],
        className: "transition-all duration-300 ease-in-out",
      },
      {
        shadow: ["none", "sm", "md", "lg", "xl"],
        className: "transition-all duration-300 ease-in-out",
      },
      {
        color: ["light", "dark"],
        size: ["sm", "md", "lg", "xl"],
        className: "transition-all duration-300 ease-in-out",
      },
      {
        color: ["light", "dark"],
        radius: ["none", "sm", "md", "lg", "xl"],
        className: "transition-all duration-300 ease-in-out",
      },
      {
        color: ["light", "dark"],
        shadow: ["none", "sm", "md", "lg", "xl"],
        className: "transition-all duration-300 ease-in-out",
      },
      {
        size: ["sm", "md", "lg", "xl"],
        radius: ["none", "sm", "md", "lg", "xl"],
        className: "transition-all duration-300 ease-in-out",
      },
      {
        size: ["sm", "md", "lg", "xl"],
        shadow: ["none", "sm", "md", "lg", "xl"],
        className: "transition-all duration-300 ease-in-out",
      },
      {
        radius: ["none", "sm", "md", "lg", "xl"],
        shadow: ["none", "sm", "md", "lg", "xl"],
        className: "transition-all duration-300 ease-in-out",
      },
    ],

    defaultVariants: {
      color: "dark",
      size: "md",
      radius: "md",
      shadow: "md",
    },
  },
);

export const cardHeaderVariants = cva("w-full p-1", {
  variants: {
    color: {
      base: "bg-base text-gray-100",
      primary: "bg-primary text-gray-100",
      secondary: "bg-secondary text-gray-100",
      success: "bg-success text-gray-100",
      warning: "bg-warning text-black",
      danger: "bg-danger text-gray-100",
      light: "bg-white text-gray-900",
      dark: "bg-black text-gray-100",
    },
  },

  compoundVariants: [
    {
      color: [
        "base",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "light",
        "dark",
      ],
      className: "border-gray-200",
    },
  ],

  defaultVariants: {
    color: "base",
  },
});

export const cardBodyVariants = cva("w-full p-1", {
  variants: {
    color: {
      base: "bg-base text-gray-100",
      primary: "bg-primary text-gray-100",
      secondary: "bg-secondary text-gray-100",
      success: "bg-success text-gray-100",
      warning: "bg-warning text-black",
      danger: "bg-danger text-gray-100",
      light: "bg-white text-gray-900",
      dark: "bg-black text-gray-100",
    },
  },

  compoundVariants: [
    {
      color: [
        "base",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "light",
        "dark",
      ],

      className: "border-gray-200",
    },
  ],

  defaultVariants: {
    color: "base",
  },
});

export const cardFooterVariants = cva("w-full p-1", {
  variants: {
    color: {
      base: "bg-base text-gray-100",
      primary: "bg-primary text-gray-100",
      secondary: "bg-secondary text-gray-100",
      success: "bg-success text-gray-100",
      warning: "bg-warning text-black",
      danger: "bg-danger text-gray-100",
      light: "bg-white text-gray-900",
      dark: "bg-black text-gray-100",
    },
  },

  compoundVariants: [
    {
      color: [
        "base",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "light",
        "dark",
      ],
      className: "border-gray-200",
    },
  ],

  defaultVariants: {
    color: "base",
  },
});
