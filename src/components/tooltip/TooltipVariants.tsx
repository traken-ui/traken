import { cva } from "class-variance-authority";

export const tooltipVariants = cva(
  "absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-md transition-opacity duration-200", 
  {
    variants: {
      position: {
        top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
        left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
        right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
      },
    },
    defaultVariants: {
      position: "top",
    },
  }
);
