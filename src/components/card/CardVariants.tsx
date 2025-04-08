import { cva } from "class-variance-authority";

export const cardVariants = cva(
    "relative flex flex-col w-full max-w-[500px] p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out",
    {
        variants: {
            color: {
                light: "bg-white text-gray-900",
                dark: "bg-gray-800 text-white",
            },
            size: {
                sm: "text-sm px-2 py-2",
                md: "text-md px-4 py-3",
                lg: "text-lg px-6 py-4",
                xl: "text-xl px-8 py-5",
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
                color: ["light", "dark"],
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
                color: ["light", "dark"],
                size: ["sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                color: ["light", "dark"],
                radius: ["none", "sm", "md", "lg", "xl"],
                className: "transition-all duration-300 ease-in-out",
            },
            {
                color: ["light", "dark"],
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
            color: "light",
            size: "md",
            radius: "md",
            shadow: "md",
        },
    },
);

export const cardHeaderVariants = cva(
    "flex items-center justify-between w-full p-3 ",
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
    "flex items-center justify-between w-full p-3",
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
