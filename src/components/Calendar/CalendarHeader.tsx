import React from "react";
import { calendarHeaderVariants } from "./CalendarVariants";
import { MonthPicker } from "./MonthPicker";
import { YearPicker } from "./YearPicker";

interface CalendarHeaderProps {
  currentMonth: Date;
  variant: "default" | "month-year-picker" | "range-picker";
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  variant,
  onMonthChange,
  onYearChange,
  onPrevMonth,
  onNextMonth,
  onToday,
}) => (
  <div className={calendarHeaderVariants({ variant: variant === "range-picker" ? "default" : variant })}>
    <button
      onClick={onToday}
      className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
    >
      Today
    </button>

    {variant === "month-year-picker" ? (
      <div className="flex gap-2">
        <MonthPicker month={currentMonth.getMonth()} onChange={onMonthChange} />
        <YearPicker year={currentMonth.getFullYear()} onChange={onYearChange} />
      </div>
    ) : (
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevMonth}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          ←
        </button>
        <span className="text-lg font-semibold">
          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button
          onClick={onNextMonth}
          className="p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          →
        </button>
      </div>
    )}
  </div>
);