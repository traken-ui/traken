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
  "w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-150",
  {
    variants: {
      isToday: {
        true: "border border-blue-400"
      },
      isSelected: {
        true: "bg-blue-600 text-white" 
      },
      isDisabled: {
        true: "text-gray-600 cursor-not-allowed"
      },
      isPreviewRange: {
        true: "bg-blue-900/30"
      },
      isPreviewEdge: {
        true: "border border-dashed border-blue-400" 
      }
    },
    compoundVariants: [
      {
        isDisabled: true,
        class: "hover:bg-transparent"
      }
    ]
  }
);