import React from "react";
import { cn } from "../../lib/utils";
import {
    cardVariants,
    cardHeaderVariants,
    cardBodyVariants,
    cardFooterVariants,
} from "./CardVariants";

interface CardProps {
    children: React.ReactNode;
    color?:
        | "base"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger"
        | "light"
        | "dark";
    size?: "sm" | "md" | "lg" | "xl";
    radius?: "none" | "sm" | "md" | "lg" | "xl";
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    className?: string;
}

function Card({
    children,
    color = "light",
    size = "md",
    radius = "md",
    shadow = "md",
    className = "",
}: CardProps) {
    return (
        <div
            className={cn(
                cardVariants({ color, size, radius, shadow }),
                className,
            )}
        >
            {children}
        </div>
    );
}

interface CardHeaderProps {
    children: React.ReactNode;
    color?:
        | "base"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger"
        | "light"
        | "dark";
    className?: string;
}

function CardHeader({ children, color = "light", className }: CardHeaderProps) {
    return (
        <div className={cn(cardHeaderVariants({ color }), className)}>
            {children}
        </div>
    );
}

interface CardBodyProps {
    children: React.ReactNode;
    color?:
        | "base"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger"
        | "light"
        | "dark";
    className?: string;
}

function CardBody({ children, color = "light", className }: CardBodyProps) {
    return (
        <div className={cn(cardBodyVariants({ color }), className)}>
            {children}
        </div>
    );
}

interface CardFooterProps {
    children: React.ReactNode;
    color?:
        | "base"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger"
        | "light"
        | "dark";
    className?: string;
}

function CardFooter({ children, color = "light", className }: CardFooterProps) {
    return (
        <div className={cn(cardFooterVariants({ color }), className)}>
            {children}
        </div>
    );
}

export { Card, CardHeader, CardBody, CardFooter };
