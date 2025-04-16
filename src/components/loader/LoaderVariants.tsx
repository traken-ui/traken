import { cva } from "class-variance-authority";

export const loaderVariants = cva("relative", {
  variants: {
    size: {
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-12 h-12",
      xl: "w-16 h-16",
      "2xl": "w-20 h-20",
      "3xl": "w-24 h-24",
      "4xl": "w-28 h-28",
    },
    color: {
      base: "text-gray-500",
      primary: "text-blue-500",
      secondary: "text-purple-500",
      success: "text-green-500",
      warning: "text-amber-500",
      danger: "text-red-500",
    },
    type: {
      spinner:
        "border-4 border-solid border-current border-t-transparent rounded-full animate-spin",
      dots: "flex items-center justify-center",
      neon: "rounded-full animate-pulse bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-700 shadow-lg",
      line: "flex items-center justify-center space-x-1",
      logo: "flex items-center justify-center",
      square: "relative flex items-center justify-center",
      letters: "flex items-center justify-center gap-1",
      bird: "relative flex items-center justify-center",
    },
  },
  defaultVariants: {
    size: "md",
    color: "base",
    type: "spinner",
  },
});
