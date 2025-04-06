// calendarVariants.ts
import { cva } from "class-variance-authority";

export const calendarVariants = cva("w-full max-w-md bg-gray-900 text-white p-4 rounded-lg shadow-lg", {
  variants: {
    color: {
      default: "bg-gray-900",
      primary: "bg-blue-900",
      secondary: "bg-purple-900"
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
  },
  defaultVariants: {
    color: "default",
    size: "md"
  }
});

export const calendarHeaderVariants = cva("flex justify-between items-center mb-4", {
  variants: {
    variant: {
      default: "gap-4",
      "month-year-picker": "gap-2 flex-wrap"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});

export const calendarDayVariants = cva(
  "p-2 rounded-full transition-colors duration-150",
  {
    variants: {
      isToday: {
        true: "border border-blue-400"
      },
      isSelected: {
        true: "bg-blue-500 text-white"
      },
      isDisabled: {
        true: "text-gray-600 cursor-not-allowed"
      },
      isInRange: {
        true: "bg-blue-300 text-black"
      },
      isRangeEdge: {
        true: "bg-blue-600 text-white"
      }
    },
    compoundVariants: [
      {
        isDisabled: true,
        class: "hover:bg-transparent"
      },
      {
        isInRange: true,
        isRangeEdge: false,
        class: "rounded-none"
      }
    ]
  }
);