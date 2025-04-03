import { cva } from "class-variance-authority";

export const cardVariants = cva(
    "relative flex flex-col w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-md transition-all duration-300 ease-in-out",
    {
        variants: {
            color: {
                light: "bg-white text-gray-900",
                dark: "bg-gray-800 text-white",
            },
            size: {
                sm: "text-sm p-2",
                md: "text-md p-4",
                lg: "text-lg p-6",
                xl: "text-xl p-8",
            },
            radius: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
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
                color: ["light", "dark"],
                className: "border-gray-200",
            },
            {
                size: ["sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
        ],

        defaultVariants: {
            color: "light",
            size: "md",
            radius: "md",
            shadow: "md",
        },
    },
);

export const cardHeaderVariants = cva(
    "flex items-center justify-between w-full p-3 border-b border-gray-200",
    {
        variants: {
            color: {
                light: "bg-white text-gray-900",
                dark: "bg-gray-800 text-white",
            },
        },

        compoundVariants: [
            {
                color: ["light", "dark"],
                className: "border-gray-200",
            },
        ],

        defaultVariants: {
            color: "light",
        },

    },
);

export const cardBodyVariants = cva("flex-1 p-3", {
    variants: {
        color: {
            light: "bg-white text-gray-900",
            dark: "bg-gray-800 text-white",
        },
    },

    compoundVariants: [
        {
            color: ["light", "dark"],
            className: "border-gray-200",
        },
    ],

    defaultVariants: {
        color: "light",
    },
});

export const cardFooterVariants = cva(
    "flex items-center justify-between w-full p-3 border-t border-gray-200",
    {
        variants: {
            color: {
                light: "bg-white text-gray-900",
                dark: "bg-gray-800 text-white",
            },
        },

        compoundVariants: [
            {
                color: ["light", "dark"],
                className: "border-gray-200",
            },
        ],

        defaultVariants: {
            color: "light",
        },
    },
);
