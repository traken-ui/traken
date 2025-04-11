import { cva } from "class-variance-authority";

export const alertVariants = cva(
    `relative p-4 text-sm min-w-fit max-w-52 bg-blue-800`,
    {
        variants: {
            color: {
                base: "bg-base text-white ",
                primary: "bg-primary-600 text-white  ",
                secondary: "bg-secondary text-white  ",
                success: " bg-success-500  text-white  ",
                warning: "bg-warning text-white ",
                danger: "bg-danger text-white  ",
            },
            size: {
                sm: "px-2 py-2 h-fit  text-sm m-8",
                md: "px-4 py-3 h-fit  text-md m-8",
                lg: "px-4 py-3 h-fit  text-lg m-8",
                xl: "px-5 py-4 h-fit  text-xl m-8",
            },
            rounded: {
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                full: "rounded-full",
            },

            shadow: {
                sm: "shadow-sm",
                md: "shadow-md",
                lg: "shadow-2xl",
                xl: "shadow-xl",
            },
            variant: {
                solid: " text-white border-0",
                flat: "",
                bordered: "border bg-transparent ",
                faded: "opacity-100 border ",
            },
        },
        compoundVariants: [
            {
                color: "success",
                variant: "solid",
                className:''
            },
            {
                color: "success",
                variant: "flat",
                className:' bg-success-100 text-success-500 font-normal '
            },
            {
                color: "success",
                variant: "bordered",
                className:' border-success-500 text-success-500 font-normal '
            },
            {
                color: "success",
                variant: "faded",
                className:' border-success-500 text-success-700 font-normal bg-success-100 '
            },
            {
                color: "primary",
                variant: "solid",
                className:''
            },
            {
                color: "primary",
                variant: "flat",
                className:' bg-primary-100 text-primary-500 font-normal '
            },
            {
                color: "primary",
                variant: "bordered",
                className:' border-primary-500 text-primary-500 font-normal '
            },
            {
                color: "primary",
                variant: "faded",
                className:' border-primary-500 text-primary-700 font-normal bg-primary-100 '
            },
            {
                color: "secondary",
                variant: "solid",
                className:''
            },
            {
                color: "secondary",
                variant: "flat",
                className:' bg-secondary-100 text-secondary-500 font-normal '
            },
            {
                color: "secondary",
                variant: "bordered",
                className:' border-secondary-500 text-secondary-500 font-normal '
            },
            {
                color: "secondary",
                variant: "faded",
                className:' border-secondary-500 text-secondary-700 font-normal bg-secondary-100 '
            },
            {
                color: "warning",
                variant: "solid",
                className:''
            },
            {
                color: "warning",
                variant: "flat",
                className:' bg-warning-50 text-warning-700 font-normal '
            },
            {
                color: "warning",
                variant: "bordered",
                className:' border-warning-500 text-warning-700 font-normal '
            },
            {
                color: "warning",
                variant: "faded",
                className:' border-warning-500 text-warning-700 font-normal bg-warning-50 '
            },

            {
                color: "danger",
                variant: "solid",
                className:''
            },
            {
                color: "danger",
                variant: "flat",
                className:' bg-danger-50 text-danger-700 font-normal '
            },
            {
                color: "danger",
                variant: "bordered",
                className:' border-danger-500 text-danger-700 font-normal '
            },
            {
                color: "danger",
                variant: "faded",
                className:' border-danger-500 text-danger-700 font-normal bg-danger-50 '
            },
            
        ],
        defaultVariants: {
            color: "base",
            rounded: "md",
            size: "sm",
            shadow: "md",
            variant: "solid",
        },
    },
);
