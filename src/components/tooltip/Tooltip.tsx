import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import { tooltipVariants } from "./TooltipVariants";

interface TooltipProps {
    children: React.ReactNode;
    content: string;
    color?: "base" | "primary" | "secondary" | "success" | "warning" | "danger";
    position?: "top" | "bottom" | "left" | "right";
    size?: "sm" | "md" | "lg" | "xl";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    shadow?: "none" | "sm" | "md" | "lg" | "xl";
    variant?: "solid" | "outline" | "ghost" | "light" | "dark";
    className?: string;
}

const Tooltip = ({
    children,
    content = "Tooltip text",
    color,
    position,
    size,
    radius,
    shadow,
    variant,
    className,
    ...props
}: TooltipProps) => {
    const [visible, setVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    let hideTimeout: NodeJS.Timeout;

    const showTooltip = () => {
        clearTimeout(hideTimeout);
        setIsMounted(true);
        setTimeout(() => setVisible(true), 500);
    };

    const hideTooltip = () => {
        hideTimeout = setTimeout(() => {
            setIsMounted(false);
        }, 200);
        setVisible(false);
    };

    useEffect(() => {
        return () => {
            clearTimeout(hideTimeout);
        };
    }, []);

    return (
        <div
            className={cn("relative h-fit w-fit")}
            onMouseEnter={showTooltip}
            onMouseLeave={hideTooltip}
        >
            {children}
            {isMounted && (
                <div
                    className={cn(
                        "absolute w-max max-w-80 scale-90 transform text-center opacity-0 transition-all duration-500",
                        visible && "scale-100 opacity-100",
                        tooltipVariants({
                            color,
                            position,
                            size,
                            radius,
                            shadow,
                            variant,
                        }),
                        className,
                    )}
                    style={{
                        transition: "opacity 0.5s ease, transform 0.5s ease",
                    }}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
