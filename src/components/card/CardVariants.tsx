import { cva } from "class-variance-authority";

export const cardVariants = cva(
    "relative flex flex-col w-full max-w-[500px] p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out",
    {
        variants: {
            color: {
                base: "bg-base-100 text-gray-900",
                primary: "bg-primary-600 text-gray-100",
                secondary: "bg-secondary-600 text-gray-100",
                success: "bg-success-600 text-gray-100",
                warning: "bg-warning-600 text-black",
                danger: "bg-danger-600 text-gray-100",
                light: "bg-base-100 text-gray-900",
                dark: "bg-base-800 text-gray-100",
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
            },
            shadow: {
                none: "shadow-none",
                sm: "shadow-sm",
                md: "shadow-md",
                lg: "shadow-lg",
                xl: "shadow-xl",
            },
        },

        compoundVariants: [
            {
                color: ["base", "primary", "secondary", "success", "warning", "danger", "light", "dark"],
                className: "border-gray-200",
            },
            {
                size: ["sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                radius: ["none", "sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                shadow: ["none", "sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                color: ["base", "primary", "secondary", "success", "warning", "danger", "light", "dark"],
                size: ["sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                color: ["base", "primary", "secondary", "success", "warning", "danger", "light", "dark"],
                radius: ["none", "sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                color: ["base", "primary", "secondary", "success", "warning", "danger", "light", "dark"],
                shadow: ["none", "sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                size: ["sm", "md", "lg", "xl"],
                radius: ["none", "sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                size: ["sm", "md", "lg", "xl"],
                shadow: ["none", "sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                radius: ["none", "sm", "md", "lg", "xl"],
                shadow: ["none", "sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
        ],

        defaultVariants: {
            color: "base",
            size: "md",
            radius: "md",
            shadow: "md",
        },
    },
);

export const cardHeaderVariants = cva(
    "w-full p-3",
    {
        variants: {
            color: {
                base: "bg-base-100 text-gray-900",
                primary: "bg-primary-600 text-gray-100",
                secondary: "bg-secondary-600 text-gray-100",
                success: "bg-success-600 text-gray-100",
                warning: "bg-warning-600 text-black",
                danger: "bg-danger-600 text-gray-100",
                light: "bg-base-100 text-gray-900",
                dark: "bg-base-800 text-gray-100",
            },
        },

        compoundVariants: [
            {
                color: ["base", "primary", "secondary", "success", "warning", "danger", "light", "dark"],
                className: "border-gray-200",
            },
        ],

        defaultVariants: {
            color: "base",
        },
    },
);

export const cardBodyVariants = cva("w-full p-3", {
    variants: {
        color: {
            base: "bg-base-100 text-gray-900",
            primary: "bg-primary-600 text-gray-100",
            secondary: "bg-secondary-600 text-gray-100",
            success: "bg-success-600 text-gray-100",
            warning: "bg-warning-600 text-black",
            danger: "bg-danger-600 text-gray-100",
            light: "bg-base-100 text-gray-900",
            dark: "bg-base-800 text-gray-100",
        },
    },

    compoundVariants: [
        {
            color: ["base", "primary", "secondary", "success", "warning", "danger", "light", "dark"],
            
            className: "border-gray-200",
        },
    ],

    defaultVariants: {
        color: "base",
    },
});

export const cardFooterVariants = cva(
    "w-full p-3",
    {
        variants: {
            color: {
                base: "bg-base-100 text-gray-900",
                primary: "bg-primary-600 text-gray-100",
                secondary: "bg-secondary-600 text-gray-100",
                success: "bg-success-600 text-gray-100",
                warning: "bg-warning-600 text-black",
                danger: "bg-danger-600 text-gray-100",
                light: "bg-base-100 text-gray-900",
                dark: "bg-base-800 text-gray-100",
            },
        },

        compoundVariants: [
            {
                color: ["base", "primary", "secondary", "success", "warning", "danger", "light", "dark"],
                className: "border-gray-200",
            },
        ],

        defaultVariants: {
            color: "base",
        },
    },
);
