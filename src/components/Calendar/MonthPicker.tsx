import React from "react";

interface MonthPickerProps {
  month: number;
  onChange: (month: number) => void;
}

export const MonthPicker: React.FC<MonthPickerProps> = ({ month, onChange }) => (
  <select
    value={month}
    onChange={(e) => onChange(Number(e.target.value))}
    className="p-2 rounded bg-gray-800 text-white"
  >
    {Array.from({ length: 12 }).map((_, i) => (
      <option key={i} value={i}>
        {new Date(2000, i).toLocaleString("default", { month: "long" })}
      </option>
    ))}
  </select>
);