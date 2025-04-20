import { cva, type VariantProps } from "class-variance-authority";

export const selectVariants = cva(
  "block appearance-none focus:outline-none transition-all",
  {
    variants: {
      variant: {
        flat: "bg-gray-100 border-none",
        faded: "bg-gray-100 border border-gray-200",
        bordered: "border border-gray-300",
        underlined: "border-b border-gray-300 rounded-none",
      },
      color: {
        base: "",
        primary: "text-blue-600",
        secondary: "text-purple-600",
        success: "text-green-600",
        warning: "text-yellow-600",
        danger: "text-red-600",
      },
      size: {
        sm: "text-sm py-1 px-2",
        md: "text-base py-2 px-3",
        lg: "text-lg py-2.5 px-4",
        xl: "text-xl py-3 px-5",
      },
      rounded: {
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      fullWidth: {
        true: "w-full",
        false: "w-xl",
      },
      isDisabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      variant: "flat",
      color: "base",
      size: "sm",
      rounded: "md",
      fullWidth: false,
      isDisabled: false,
    },
  },
);

export type SelectVariantProps = VariantProps<typeof selectVariants>;