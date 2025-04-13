import { cva } from "class-variance-authority";

export const dividerVariants = cva("bg-gray-300 border", {
    variants: {
        color: {
            default: "bg-gray-300",
            primary: "bg-primary-500",
            secondary: "bg-secondary-500",
            success: "bg-success-500",
            warning: "bg-warning-500",
            danger: "bg-danger-500",
        },
        thickness: {
            thin: "",
            medium: "",
            thick: "",
        },
        variant: {
            solid: " border-none",
            dashed: " border-none",
            dotted: " border-none",
        },
        spacing: {
            none: "my-0 mx-0",
            sm: "my-2 mx-2",
            md: "my-4 mx-4",
            lg: "my-6 mx-6",
        },
        orientation: {
            horizontal: "w-98 m-20",
            vertical: "h-full ml-20",
        },
    },
    compoundVariants: [
        { thickness: "thin", orientation: "horizontal", className: "h-0.5 w-1" },
        { thickness: "medium", orientation: "horizontal", className: "h-1" },
        { thickness: "thick", orientation: "horizontal", className: "h-2" },

        { thickness: "thin", orientation: "vertical", className: "w-0.5" },
        { thickness: "medium", orientation: "vertical", className: "w-1" },
        { thickness: "thick", orientation: "vertical", className: "w-2" },
    ],
    defaultVariants: {
        color: "default",
        thickness: "thin",
        variant: "solid",
        spacing: "md",
        orientation: "horizontal",
    },
});