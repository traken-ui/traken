import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { toggleVariants } from "./Switchvariants";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  size?: "sm" | "md" | "lg" | "xl";
  color?: "base" | "primary" | "secondary" | "success" | "warning" | "danger" | "transperent";
  onText? : string;
  offTextt?: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ 
    checked = false,
     onChange,
      size = "sm",
      color = "primary",
      onText = "",
      offTextt = ""
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
      className={cn(toggleVariants({ size, checked: isOn ? true : false, color }), "rounded-full p-1")}
      onClick={handleToggle}
    >
      <span
        className={cn(
          "bg-white dark:bg-gray-300 rounded-full shadow-md transition-all duration-300 ease-in-out grid place-items-center",
          {
            "w-3 h-3 ml-5 text-[6px]": size === "sm" && isOn,
            "w-4 h-4 ml-6 text-[8px]": size === "md" && isOn,
            "w-5 h-5 ml-7 text-[10px]": size === "lg" && isOn,
            "w-6 h-6 ml-8 text-[12px]": size === "xl" && isOn,
            "w-3 h-3 text-[6px]": size === "sm" && !isOn,
            "w-4 h-4 text-[8px]": size === "md" && !isOn,
            "w-5 h-5 text-[10px]": size === "lg" && !isOn,
            "w-6 h-6 text-[12px]": size === "xl" && !isOn,

          }
        )}
      >

{isOn? onText : offTextt}

      </span>
    </button>
  );
};

export default ToggleSwitch;
