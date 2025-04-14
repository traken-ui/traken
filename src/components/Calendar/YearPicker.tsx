import React, { useState, useRef, useEffect } from "react";

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
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
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