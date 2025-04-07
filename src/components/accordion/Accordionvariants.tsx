import { cva } from "class-variance-authority";

export const accordionVariants = cva("space-y-2", {
  variants: {
    variant: {
      light: "bg-white text-black border border-gray-300 shadow-sm",
      shadow: "bg-white text-black shadow-lg border border-gray-200",
      bordered: "border border-gray-400 bg-white text-black",
      splitted: "divide-y divide-gray-300 bg-white text-black",
    },
    selectionMode: {
      none: "",
      single: "max-h-[500px] overflow-auto",
      multiple: "overflow-auto space-y-1",
    },
    size: {
      sm: "w-full max-w-xs text-sm px-3 py-2",
      md: "w-full max-w-md text-base px-4 py-3",
      lg: "w-full max-w-lg text-lg px-5 py-4",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
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
    // AccordionItem Specific Variants (Prefixed to avoid naming conflicts)
    itemExpanded: {
      true: "bg-gray-100 shadow-md",
      false: "bg-white shadow-sm",
    },
    itemBorder: {
      none: "border-none",
      default: "border-t border-gray-300",
      rounded: "rounded-md border border-gray-300",
    },
    itemPadding: {
      sm: "p-2",
      md: "p-4",
      lg: "p-6",
    },
    itemColor: {
      light: "text-gray-900",
      dark: "text-white bg-gray-900",
      primary: "text-primary-700 bg-primary-100",
      secondary: "text-secondary-700 bg-secondary-100",
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
    selectionMode: "none",
    size: "md",
    radius: "md",
    isDisabled: false,
    hideIndicator: false,
    disableAnimation: false,
    isCompact: false,
    itemExpanded: false,
    itemBorder: "default",
    itemPadding: "md",
    itemColor: "light",
    itemIsDisabled: false,
    itemDisableAnimation: false,
  },
});
