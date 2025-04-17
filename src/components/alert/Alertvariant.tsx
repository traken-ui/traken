import { cva } from "class-variance-authority";

export const alertVariants = cva(
  `relative p-4 text-sm min-w-fit max-w-52 bg-blue-800`,
  {
    variants: {
      color: {
        base: "bg-base text-white ",
        primary: "bg-primary text-white  ",
        secondary: "bg-secondary text-white  ",
        success: " bg-success text-white  ",
        warning: "bg-warning text-white ",
        danger: "bg-danger text-white  ",
      },
      size: {
        sm: "px-2 py-2 h-fit text-sm m-8",
        md: "px-4 py-3 h-fit text-md m-8",
        lg: "px-4 py-3 h-fit text-lg m-8",
        xl: "px-5 py-4 h-fit text-xl m-8",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },

      shadow: {
        sm: "shadow-sm",
        md: "shadow-md",
        lg: "shadow-2xl",
        xl: "shadow-xl",
      },
      variant: {
        solid: " text-white border-0",
        flat: "",
        bordered: "border bg-transparent ",
        faded: "opacity-100 border ",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        className: "",
      },
      {
        variant: "flat",
        className: " bg-transparent text-primary-700 font-normal ",
      },
      {
        variant: "bordered",
        className: " border-primary-500 text-primary-500 font-normal ",
      },
      {
        variant: "faded",
        className:
          " border-primary-100 text-primary-700 font-normal bg-primary-100",
      },
    ],
    defaultVariants: {
      color: "base",
      rounded: "md",
      size: "sm",
      shadow: "md",
      variant: "solid",
    },
  },
);
