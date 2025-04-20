import React from "react";
import Button from "../button/Button";
import { LeftArrowIcon, RightArrowIcon } from "./icons";
import { cn } from "../../lib/utils";

interface NavigationButtonsProps {
  onNextMonth: () => void;
  onPrevMonth: () => void;
  color?: "light" | "dark";
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevMonth,
  onNextMonth,
  color = "dark",
}) => {
  // Theme variables
  const theme = {
    light: {
      icon: "text-gray-800",
      hoverBg: "hover:bg-gray-200",
      activeBg: "active:bg-gray-300",
    },
    dark: {
      icon: "text-gray-100",
      hoverBg: "hover:bg-gray-700",
      activeBg: "active:bg-gray-600",
    },
  };

  const currentTheme = theme[color];

  return (
    <div className="gap-2 flex items-center justify-center">
      <Button
        onClick={onPrevMonth}
        variant="ghost"
        color={color === "dark" ? "base" : "secondary"}
        size="sm"
        rounded="md"
        className={cn(
          "p-1 transition-colors duration-150",
          currentTheme.hoverBg,
          currentTheme.activeBg
        )}
        ripple={false}
      >
        <LeftArrowIcon className={cn("h-5 w-5", currentTheme.icon)} />
      </Button>

      <Button
        onClick={onNextMonth}
        variant="ghost"
        color={color === "dark" ? "base" : "secondary"}
        size="sm"
        rounded="md"
        className={cn(
          "p-1 transition-colors duration-150",
          currentTheme.hoverBg,
          currentTheme.activeBg
        )}
        ripple={false}
      >
        <RightArrowIcon className={cn("h-5 w-5", currentTheme.icon)} />
      </Button>
    </div>
  );
};