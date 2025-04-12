import { cva } from "class-variance-authority";

export const modalVariants = cva(
    "relative flex flex-col transition-all duration-200",
    {
        variants: {
            color: {
                base: "bg-base-100 text-gray-900",
                primary: "bg-primary-600 text-gray-100",
                secondary: "bg-secondary-600 text-gray-100",
                success: "bg-success-600 text-gray-100",
                warning: "bg-warning-600 text-black",
                danger: "bg-danger-600 text-gray-100",
                subtle: "bg-base-100 text-gray-800",
                transparent: "bg-transparent backdrop-blur-sm text-gray-100",
            },
            size: {
                xs: "max-w-xs px-4 py-2",
                sm: "max-w-sm px-6 py-3",
                md: "max-w-md px-8 py-3",
                lg: "max-w-lg px-10 py-4",
                xl: "max-w-xl px-12 py-4",
                "2xl": "max-w-2xl px-14 py-4",
                "3xl": "max-w-3xl px-16 py-6",
                full: "max-w-full px-10 py-10",
            },
            radius: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                "2xl": "rounded-2xl",
                full: "rounded-full",
            },
            shadow: {
                none: "shadow-none",
                sm: "shadow-sm",
                md: "shadow-md",
                lg: "shadow-lg",
                xl: "shadow-xl",
                "2xl": "shadow-2xl",
                inner: "shadow-inner",
            },
            border: {
                none: "border-0",
                thin: "border border-gray-200",
                medium: "border-2 border-gray-300",
                thick: "border-4 border-gray-400",
            },
            animation: {
                none: "",
                fade: "animate-fade",
                scale: "animate-scale",
                slide: "animate-slide-up",
            },
            overlayColor: {
                dark: "bg-black/50",
                light: "bg-white/30",
                blur: "backdrop-blur-sm",
                none: "",
            },
        },
        compoundVariants: [
            {
                color: "transparent",
                className:
                    "bg-white/10 backdrop-blur-md border border-white/20",
            },

            {
                color: "primary",
                border: "thin",
                className: "border-blue-300 bg-blue-100/50 text-blue-900",
            },

            {
                color: "warning",
                shadow: "lg",
                className: "shadow-yellow-200/50",
            },

            {
                color: "success",
                shadow: ["lg", "xl", "2xl"],
                className: "shadow-green-200/50",
            },

            {
                color: "danger",
                shadow: ["lg", "xl", "2xl"],
                className: "shadow-red-200/50",
            },

            {
                size: ["xs", "sm"],
                radius: "lg",
                className: "rounded-md",
            },

            {
                size: ["2xl", "3xl", "full"],
                radius: ["sm", "md"],
                className: "rounded-lg",
            },

            {
                border: ["thin", "medium"],
                size: ["lg", "xl", "2xl", "3xl"],
                className: "divide-y divide-gray-100",
            },

            {
                color: "transparent",
                overlayColor: ["blur", "light", "none"],
                className: "text-gray-800"
            }
        ],
        defaultVariants: {
            color: "base",
            size: "md",
            radius: "md",
            shadow: "lg",
            border: "none",
            animation: "fade",
        },
    },
);
