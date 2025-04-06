import { cn } from "../../lib/utils";
import { inputVariants } from "./inputVariants";
import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    color?: "base" | "primary" | "secondary" | "success" | "warning" | "danger";
    rounded?: "sm" | "md" | "lg" | "xl" | "full";
    variant?: "default" | "disabled";
}

const Input = ({
    className,
    variant,
    color,
    rounded,
    ...props
}: InputProps) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    return (
        <input
            className={cn(
                inputVariants({
                    color,
                    rounded,
                    variant,
                }),
                className,
            )}
            ref={inputRef}
            {...props}
        />
    );
};
Input.displayName = "Input";
export default Input;
