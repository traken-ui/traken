import { cva } from "class-variance-authority";

export const calendarVariants = cva("w-full max-w-md text-black p-4 rounded-lg shadow-lg", {
  variants: {
    color: {
      light: "bg-white text-gray-900",
      dark: "bg-black text-gray-100",
    },
    
  },
  defaultVariants: {
    color: "dark",
  }
});

export const calendarHeaderVariants = cva("flex justify-between items-center mb-4", {
  variants: {
    variant: {
      default: "gap-4",
      "month-year-picker": "gap-2 flex-wrap"
    },
    color: {
      light: "text-gray-900",
      dark: "text-gray-100"
    }
  },
  defaultVariants: {
    variant: "default",
    color: "dark"
  }
});

export const calendarDayVariants = cva(
  "h-9 flex items-center justify-center rounded-full transition-colors duration-150",
  {
    variants: {
      isToday: {
        true: "border border-primary-400"
      },
      isSelected: {
        true: "bg-primary-600 text-white" 
      },
      isDisabled: {
        true: "text-base-400 cursor-not-allowed"
      },
      isPreviewRange: {
        true: "bg-primary-900/30"
      },
      isPreviewEdge: {
        true: "border border-dashed border-primary-400" 
      },
      isTodayHighlighted: {
        true: 'border border-primary-400 animate-pulse'
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