import { cva } from "class-variance-authority";

export const accordionVariants = cva("space-y-2", {
  variants: {
    variant: {
      light:
        "bg-gray-900 text-white border border-gray-700 shadow-sm transition-all duration-300 ease-in-out hover:shadow-md",
      shadow:
        "bg-black text-white shadow-lg border border-gray-700 transition-all duration-300 ease-in-out hover:shadow-xl",
      bordered:
        "border border-gray-600 bg-gray-800 text-white transition-all duration-300 ease-in-out hover:border-gray-500",
      splitted:
        "divide-y divide-gray-700 bg-gray-900 text-white transition-all duration-300 ease-in-out hover:bg-gray-800",
      animated:
        "bg-gray-900 text-white border border-gray-700 shadow-sm transition-all duration-500 transform hover:scale-[1.01]",
    },
    selectionMode: {
      single: "max-h-[500px] overflow-auto",
      multiple: "overflow-auto space-y-1",
    },
    selectionBehavior: {},
    size: {
      xs: "w-full max-w-xs text-xs px-2 py-1",
      sm: "w-full max-w-sm text-sm px-3 py-2",
      md: "w-full max-w-md text-base px-4 py-3",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    isDisabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
      false: "opacity-100 pointer-events-auto",
    },
    hideIndicator: {
      true: "hidden",
      false: "block",
    },
    disableAnimation: {
      true: "transition-none",
      false: "transition-all duration-300 ease-in-out",
    },
    isCompact: {
      true: "py-1 px-2 text-sm space-y-1",
      false: "py-3 px-4 text-base space-y-2",
    },
    itemExpanded: {
      true: "bg-gray-800 shadow-md transition-all duration-300 ease-in-out w-full",
      false:
        "bg-gray-900 shadow-sm transition-all duration-300 ease-in-out w-full",
    },
    itemIsDisabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
      false: "opacity-100 pointer-events-auto",
    },
    itemDisableAnimation: {
      true: "transition-none",
      false: "transition-all duration-300 ease-in-out",
    },
  },
  defaultVariants: {
    variant: "light",
    selectionMode: "single",
    size: "md",
    radius: "md",
    isDisabled: false,
    hideIndicator: false,
    disableAnimation: false,
    isCompact: false,
    itemExpanded: false,
    itemIsDisabled: false,
    itemDisableAnimation: false,
  },
});
