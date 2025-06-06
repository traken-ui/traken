import { cva } from "class-variance-authority";

export const calendarVariants = cva("w-full bg-gray-900 text-white p-4 rounded-lg shadow-lg", {
  variants: {
    color: {
      // light: "bg-white text-balck dark:text-gray-900 dark:bg-gray-100" ,
      dark: "bg-black text-gray-100 dark:text-gray-900 dark:bg-gray-100",
    },
    size: {
      sm: "w-sm text-sm",
      md: "w-md text-md",
      lg: "w-lg text-lg",
      xl: "w-xl text-xl",
     
    },
    shadow: {
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      none: "shadow-none"
    }
  },
  defaultVariants: {
    color: "dark",
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