import React, { useState, useRef, useEffect } from "react";

interface YearPickerProps {
  year: number;
  onChange: (year: number) => void;
}

export const YearPicker: React.FC<YearPickerProps> = ({ year, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const startYear = 1975; // Fixed start year
  const years = Array.from({ length: 101 }, (_, i) => startYear + i); // Range: 1975-2075
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && dropdownRef.current) {
      // Scroll to the current year (2025 or selected year)
      const currentYearIndex = years.indexOf(year);
      if (currentYearIndex !== -1) {
        const itemHeight = 40; // Approximate height of each dropdown item (adjust if needed)
        dropdownRef.current.scrollTop = currentYearIndex * itemHeight - itemHeight * 2; // Center the year
      }
    }
  }, [isOpen, year, years]);

  return (
    <div className="relative w-24">
      <div
        className="flex items-center justify-between p-2 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white">{year}</span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-hide"
        >
          {years.map((yearOption) => (
            <div
              key={yearOption}
              className={`p-2 text-white cursor-pointer hover:bg-gray-700 ${
                year === yearOption ? "bg-blue-600" : ""
              }`}
              onClick={() => {
                onChange(yearOption);
                setIsOpen(false);
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