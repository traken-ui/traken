import React, { useState } from "react";
import './monthYear.css'
import {  DropdownIcon } from "./icons";
import {cn} from '../../lib/utils'
interface MonthPickerProps {
  month: number;
  onChange: (month: number) => void;
  open:boolean,
  onOpenChange:(open:boolean)=>void
  color?: "light" | "dark";
}

export const MonthPicker: React.FC<MonthPickerProps> = ({ 
  month, 
  onChange,
  open,
  onOpenChange,
  color = "dark", 
}) => {
  const bgColor = color === "dark" ? "bg-base-600" : "bg-gray-100";
  const borderColor = color === "dark" ? "border-base-500" : "border-gray-300";
  const textColor = color === "dark" ? "text-white" : "text-gray-800";
  const hoverBg = color === "dark" ? "hover:bg-base-400" : "hover:bg-gray-200";
  const activeBg = color === "dark" ? "bg-base-700" : "bg-gray-300";
  
  const months = Array.from({ length: 12 }, (_, i) =>
  new Date(2000, i).toLocaleString("default", { month: "long" })
  );

return (
<div className="relative w-32">
  <div
  className={cn(
    "flex items-center justify-between p-2 border rounded-lg cursor-pointer",
    bgColor,
    borderColor,
    textColor
  )}
  onClick={() => onOpenChange(!open)}
  >
    <span>{months[month]}</span>
    <DropdownIcon open={open} color={color}/>
  </div>

{open && (
    <div className={cn(
        "absolute z-10 w-full mt-1 border rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-hide",
        bgColor,
        borderColor
        )}>      
        
        {months.map((monthName, index) => (
          <div
            key={index}
            className={cn(
              "p-2 cursor-pointer",
              textColor,
              hoverBg,
              month === index ? activeBg : ""
            )}
            onClick={() => {
              onChange(index);
              onOpenChange(false);
            }}
          >
            {monthName}
          </div>
        ))}
    </div>
  )}
</div>
);
};