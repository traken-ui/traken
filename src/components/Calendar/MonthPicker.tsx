import React, { useState } from "react";
import './monthYear.css'

interface MonthPickerProps {
month: number;
onChange: (month: number) => void;
}

export const MonthPicker: React.FC<MonthPickerProps> = ({ month, onChange }) => {
const [isOpen, setIsOpen] = useState(false);
const months = Array.from({ length: 12 }, (_, i) =>
new Date(2000, i).toLocaleString("default", { month: "long" })
);

return (
<div className="relative w-32">
<div
className="flex items-center justify-between p-2 bg-gray-800 border border-gray-700 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
onClick={() => setIsOpen(!isOpen)}
>
<span className="text-white">{months[month]}</span>
<svg
className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 20 20"
fill="currentColor"
>
<path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
</div>

{isOpen && (
    <div className="absolute z-10 w-full mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-hide">
      {months.map((monthName, index) => (
        <div
          key={index}
          className={`p-2 text-white cursor-pointer hover:bg-gray-700 ${month === index ? "bg-blue-600" : ""}`}
          onClick={() => {
            onChange(index);
            setIsOpen(false);
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