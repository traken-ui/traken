import React, { useState, useRef, useEffect } from "react";
import { DropdownIcon } from "./icons";

interface YearPickerProps {
  year: number;
  onChange: (year: number) => void;
  open:boolean,
  onOpenChange:(open:boolean)=>void
}

export const YearPicker: React.FC<YearPickerProps> = ({ 
    year,
    onChange,
    open,
    onOpenChange 
}) => {
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
        className="flex items-center justify-between p-2 bg-base-600 border border-base-500 rounded-lg cursor-pointer"
        onClick={() => onOpenChange(!open)}
      >
        <span className="text-white">{year}</span>
        <DropdownIcon open={open}/>
      </div>
      {open && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-base-600 border border-base-500  rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-hide"
        >
          {years.map((yearOption) => (
            <div
              key={yearOption}
              className={`p-2 text-white cursor-pointer hover:bg-base-400 ${
                year === yearOption ? "bg-base-700" : ""
              }`}
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