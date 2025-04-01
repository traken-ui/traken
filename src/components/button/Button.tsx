import React, { ButtonHTMLAttributes, MouseEventHandler } from "react";
import { cn } from "../../lib/utils";

import { triggerRipple } from "./Ripple";

import { buttonVariants } from "./Buttonvariants";

type ButtonHTMLAttributesWithoutColor = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "color"
>;

export interface ButtonProps extends ButtonHTMLAttributesWithoutColor {
    children?: React.ReactNode;
    className?: string;
    ripple?: boolean;
    color?: "base" | "primary" | "secondary" | "success" | "warning" | "danger";
    size?: "sm" | "md" | "lg" | "xl";
    rounded?: "sm" | "md" | "lg" | "xl" | "full";
    variant?: "solid" | "outline" | "ghost" | "flat";
    onMouseDown?: MouseEventHandler<HTMLButtonElement>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            className,
            variant,
            size,
            color,
            rounded,
            ripple = true,
            onMouseDown,
            ...props
        },
        ref,
    ) => {
        const buttonRef = React.useRef<HTMLButtonElement>(null);
        const rippleRef = React.useRef<HTMLSpanElement>(null);
        return (
            <button
                className={cn(
                    buttonVariants({
                        color,
                        size,
                        rounded,
                        variant,
                    }),
                    className,
                )}
                ref={buttonRef}
                onMouseDown={(e) => {
                    triggerRipple(e, ripple, buttonRef, rippleRef, onMouseDown);
                }}
                {...props}
            >
                {children}
                {ripple && (
                    <span
                        className="absolute bottom-0 right-0 hidden aspect-square h-[10%] rounded-full bg-white"
                        ref={rippleRef}
                    ></span>
                )}
            </button>
        );
    },
);

Button.displayName = "Button";
export default Button;
