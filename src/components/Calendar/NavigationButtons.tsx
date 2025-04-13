import React from "react";
import Button from "../button/Button";
import { cn } from "@/lib/utils";

interface NavigationButtonsProps {
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevMonth,
  onNextMonth,
}) => {
  return (
    <div className="flex items-center gap-1 px-2 py-1 bg-base-100 rounded-lg shadow-md">
      <Button
        onClick={onPrevMonth}
        size="sm"
        className={cn( 
                " bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-all",
              )}
      >
        ←
      </Button>
      <Button
        onClick={onNextMonth}
        // className="p-1 text-lg rounded-full transition-all"
        size="sm"
        className={cn( 
          " bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-all",
        )}
      >
        →
      </Button>
    </div>
  );
};