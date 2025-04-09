import React from "react";

interface YearPickerProps {
  year: number;
  onChange: (year: number) => void;
}

export const YearPicker: React.FC<YearPickerProps> = ({ year, onChange }) => (
  <select
    value={year}
    onChange={(e) => onChange(Number(e.target.value))}
    className="p-2 rounded bg-gray-800 text-white"
  >
    {Array.from({ length: 10 }).map((_, i) => {
      const yearOption = new Date().getFullYear() - 5 + i;
      return (
        <option key={yearOption} value={yearOption}>
          {yearOption}
        </option>
      );
    })}
  </select>
);