import { cva } from "class-variance-authority";

export const inputVariants = cva(
    `outline-none text-black peer appearance-none`,
    {
        variants: {
            color: {
                base:"border-gray-500 placeholder-gray-400 focus:placeholder-gray-300 bg-gray-200",
                primary:
                    "border-primary placeholder-primary-200 focus:placeholder-primary-100 bg-primary-50",
                secondary:
                    "border-secondary placeholder-secondary-200 focus:placeholder-secondary-100 bg-secondary-50",
                success:
                    "border-success placeholder-success-200 focus:placeholder-success-100 bg-success-50",
                warning:
                    "border-warning placeholder-warning-400 focus:placeholder-warning-200 bg-warning-50",
                danger: "border-danger placeholder-danger-200 focus:placeholder-danger-100 bg-danger-50",
            },
            size: {
                base: "px-2 py-1",
                sm: "px-2 py-1 h-fit text-sm",
                md: "px-3 py-2 h-fit text-md",
                lg: "px-3 py-2 h-fit text-lg",
                xl: "px-4 py-3 h-fit text-xl",
            },
            rounded: {
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                full: "rounded-full",
            },
            variant: {
                flat: "",
                faded: "border",
                bordered: "border bg-",
                underlined: "border-b-2 rounded-none",
            },
            fullWidth: {
                true: "w-full",
            },
        },
        defaultVariants: {
            variant: "flat",
            color: "base",
            rounded: "md",
        },
    },
);


export const labelVariants = cva(`pr-2`, {
    variants: {
        labelPlacement: {
            top: "block",
            left: "",
        },
        color: {
            base: "text-black",
            primary: "text-primary",
            secondary: "text-secondary",
            success: "text-success",
            warning: "text-warning",
            danger: "text-danger",
        },
        size: {
            base: "py-2",
            sm: "pr-2 py-0 text-md",
            md: "pr-4 py-1 text-lg",
            lg: "pr-6 py-2 text-xl",
            xl: "pr-8 py-3 text-xl",
        },
    },

    defaultVariants: {},
});