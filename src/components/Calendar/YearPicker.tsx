import React, { useRef, useEffect } from "react";
import { DropdownIcon } from "./icons";
import {cn} from '../../lib/utils'
interface YearPickerProps {
  year: number;
  onChange: (year: number) => void;
  open:boolean,
  onOpenChange:(open:boolean)=>void
  color?: "light" | "dark";
}

export const YearPicker: React.FC<YearPickerProps> = ({ 
    year,
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

  const startYear = 1975; 
  const years = Array.from({ length: 101 }, (_, i) => startYear + i); // Range: 1975-2075
  const dropdownRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    if (open && dropdownRef.current) {
      // Scroll to the current year (2025 or selected year)
      const currentYearIndex = years.indexOf(year);
      if (currentYearIndex !== -1) {
        const itemHeight = 40; // Approximate height of each dropdown item (adjust if needed)
        dropdownRef.current.scrollTop = currentYearIndex * itemHeight - itemHeight * 2; // Center the year
      }
    }
  }, [open, year, years]);

  return (
    <div className="relative w-24">
      <div
        className={cn(
          "flex items-center justify-between p-2 border rounded-lg cursor-pointer",
          bgColor,
          borderColor,
          textColor
        )}        
        onClick={() => onOpenChange(!open)}
      >
        <span>{year}</span>
        <DropdownIcon open={open} color={color}/>
      </div>
      {open && (
        <div
          ref={dropdownRef}
          className={cn(
            "absolute z-10 w-full mt-1 border rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-hide",
            bgColor,
            borderColor
          )}  
        >
          {years.map((yearOption) => (
            <div
              key={yearOption}
              className={cn(
                "p-2 cursor-pointer",
                textColor,
                hoverBg,
                year === yearOption ? activeBg : ""
              )}
              onClick={() => {
                onChange(yearOption);
                onOpenChange(false);
              }}
            >
              {yearOption}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};