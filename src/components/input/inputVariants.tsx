import { cva } from "class-variance-authority";

export const inputVariants = cva(
    `relative disabled:opacity-50 border px-2 outline-none text-black`,
    {
        variants: {
            color: {
                base: "border-gray-500 placeholder-gray-500 focus:placeholder-gray-400 ",
                primary: "border-primary",
                secondary: "border-secondary",
                success: "border-success",
                warning: "border-warning",
                danger: "border-danger",
            },
            // size: {
            //     sm: 'px-3 py-1 h-fit text-sm',
            //     md: 'px-5 py-2 h-fit text-md',
            //     lg: 'px-7 py-3 h-fit text-lg',
            //     xl: 'px-9 py-4 h-fit text-xl',
            // },
            rounded: {
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
                full: "rounded-full",
            },
            variant: {
                default: "",
                disabled: "opacity-60",
            },
        },
        defaultVariants: {
            variant: "default",
            color: "base",
            rounded: "md",
        },
    },
);
