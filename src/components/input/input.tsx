import { cn } from "../../lib/utils";
import { inputVariants,labelVariants } from "./inputVariants";
import React, { InputHTMLAttributes } from "react";

type NativeInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
export interface InputProps extends NativeInputProps {
    className?: string;
    fullWidth?: boolean;
    disabled?: boolean;
    inputSize?: number;
    color?: "base" | "primary" | "secondary" | "success" | "warning" | "danger";
    rounded?: "sm" | "md" | "lg" | "xl" | "full";
    size?: "base"|"sm" | "md" | "lg" | "xl";
    variant?: "flat" | "faded" | "bordered" | "underlined";
    label?:string;
    labelPlacement?: "top"|"left"
}

const Input = ({
    placeholder,
    id,
    label,
    labelPlacement,
    size,
    fullWidth,
    className,
    variant,
    color,
    rounded,
    disabled,
    inputSize,
    ...props
}: InputProps) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    return (
        <div className="relative z-10 bg-transparent">
            <label htmlFor={id} className={cn(labelVariants({
                labelPlacement,
                color,
                size,
            }))}>
                {label}
            </label>
            <input
                placeholder={placeholder}
                id={id}
                size={inputSize}
                disabled={disabled}
                className={cn(
                    inputVariants({
                        size,
                        fullWidth,
                        color,
                        rounded,
                        variant,
                    }),
                    className,
                )}
                ref={inputRef}
                {...props}
            />
        </div>
    );
};
Input.displayName = "Input";
export default Input;
