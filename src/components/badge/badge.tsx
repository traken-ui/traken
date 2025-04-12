import React from "react";
import { cn } from "../../lib/utils";
import { badgeVariants } from "./badgeVariants";

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "content"> {
  children?: React.ReactNode;
  className?: string;
  color?: "base" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  placement?: "topRight" | "topLeft" | "bottomRight" | "bottomLeft";
  variant?: "solid" | "flat" | "faded" | "shadow";
  content?: string | number | React.ReactNode;
}

const Badge = ({
  children,
  className,
  variant,
  size,
  color,
  rounded,
  placement,
  content,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        badgeVariants({
          color,
          size,
          rounded,
          placement,
          variant,
        }),
        className,
      )}
      {...props}
    >
      {content !== undefined ? content : children}
    </span>
  );
};

export default Badge;
