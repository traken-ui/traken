import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { toggleVariants } from "./Switchvariants";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg" | "xl";
  color?:
    | "base"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "transperent";
  onText?: string;
  offTextt?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  checked = false,
  onChange,
  size = "sm",
  color = "primary",
  onText = "",
  offTextt = "",
}) => {
  const [isOn, setIsOn] = useState(checked);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    if (onChange) {
      onChange(!isOn);
    }
  };

  return (
    <button
      className={cn(
        toggleVariants({ size, checked: isOn ? true : false, color }),
        "rounded-full p-1",
      )}
      onClick={handleToggle}
    >
      <span
        className={cn(
          "grid place-items-center rounded-full bg-white shadow-md transition-all duration-300 ease-in-out dark:bg-gray-300",
          {
            "ml-5 h-3 w-3 text-[6px]": size === "sm" && isOn,
            "ml-6 h-4 w-4 text-[8px]": size === "md" && isOn,
            "ml-7 h-5 w-5 text-[10px]": size === "lg" && isOn,
            "ml-8 h-6 w-6 text-[12px]": size === "xl" && isOn,
            "h-3 w-3 text-[6px]": size === "sm" && !isOn,
            "h-4 w-4 text-[8px]": size === "md" && !isOn,
            "h-5 w-5 text-[10px]": size === "lg" && !isOn,
            "h-6 w-6 text-[12px]": size === "xl" && !isOn,
          },
        )}
      >
        {isOn ? onText : offTextt}
      </span>
    </button>
  );
};

export default ToggleSwitch;
