import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../lib/utils";
import { tooltipVariants } from "./TooltipVariants";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  color?:
    | "base"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark";
  position?: "top" | "bottom" | "left" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "outline" | "ghost";
  delay?: number;
  className?: string;
}

const Tooltip = ({
  children,
  content = "Tooltip text",
  color = "base",
  position = "top",
  size = "md",
  radius = "md",
  shadow = "sm",
  variant = "solid",
  delay = 800,
  className,
  ...props
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const showTooltip = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setMounted(true);
    timeoutRef.current = window.setTimeout(() => {
      setVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setVisible(false);
    timeoutRef.current = window.setTimeout(() => {
      setMounted(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className={cn("relative inline-block h-fit w-fit")}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      {...props}
    >
      {children}
      {mounted && (
        <div
          className={cn(
            "absolute z-50 w-max max-w-80 scale-90 transform text-center opacity-0 transition-all duration-300 ease-in-out",
            visible ? "scale-100 opacity-100" : "scale-95 opacity-0",
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
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
