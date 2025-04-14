import React from "react";
import Button from "../button/Button";
import { LeftArrowIcon, RightArrowIcon } from "./icons";

interface NavigationButtonsProps {
  onNextMonth: () => void;
  onPrevMonth: () => void;
}

export const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  onPrevMonth,
  onNextMonth,
}) => {
  return (
    <div className="gap-2 flex items-center justify-center ">
      <Button
        onClick={onPrevMonth}
        className="p-1 "
        ripple={false}
        // variant="outline"
      >
        <LeftArrowIcon/>
      </Button>

      <Button 
        onClick={onNextMonth}
        className="p-1"
        ripple={false}
        // variant="outline"
      >
        <RightArrowIcon/>
      </Button>
    </div>
  );
};
