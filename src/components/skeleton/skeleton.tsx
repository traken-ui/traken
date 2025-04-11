import React from "react";
import { skeletonVariants } from "./SkeletonVariants";
import { cn } from "../../lib/utils";

export interface SkeletonProps {
  children?: React.ReactNode;
  className?: string;
  speed?: "slow" | "normal" | "fast";
  color?: "light" | "dark" | "primary" | "secondary";
  isLoading?: boolean;
  disableAnimation?: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({
  speed,
  color,
  isLoading = true,
  disableAnimation,
  className,
  ...props
}) => {
  const skeletonClassName = cn(
    skeletonVariants({ speed, color, isLoading, disableAnimation }),
    className,
  );

  return <div className={skeletonClassName} {...props} />;
};

export default Skeleton;
