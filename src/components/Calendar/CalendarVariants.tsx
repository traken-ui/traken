import { cva } from "class-variance-authority";

export const calendarVariants = cva("w-full max-w-md text-black p-4 rounded-lg shadow-lg", {
  variants: {
    color: {
      base: 'bg-base text-white hover:bg-base-600',
        primary: 'bg-primary text-white hover:bg-primary-600',
        secondary: 'bg-secondary text-white hover:bg-secondary-600',
        success: 'bg-success text-white hover:bg-success-600',
        warning: 'bg-warning text-white hover:bg-warning-600',
        danger: 'bg-danger text-white hover:bg-danger-600',
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
  },
  defaultVariants: {
    color: "base",
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
        true: "text-gray-600 cursor-not-allowed"
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