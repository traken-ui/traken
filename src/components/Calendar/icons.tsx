import React from "react";
import {cn} from '../../lib/utils'
export const LeftArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-5 w-5", className)}
    viewBox="0 0 20 20"
    fill="currentColor" // This makes it inherit text color
  >
    <path
      fillRule="evenodd"
      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export const RightArrowIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-5 w-5", className)}
    viewBox="0 0 20 20"
    fill="currentColor" // This makes it inherit text color
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

interface DropdownIconProps {
  open: boolean;
  color?: "light" | "dark";
}

export const DropdownIcon: React.FC<DropdownIconProps> = ({ open, color = "dark" }) => (
  <svg
    className={cn(
      "w-5 h-5 transition-transform",
      open ? "rotate-180" : "",
      color === "dark" ? "text-base-400" : "text-gray-500"
    )}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);