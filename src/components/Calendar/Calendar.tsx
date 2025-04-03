// Calendar.tsx
import React, { useState } from "react";
import {cn} from "src/lib/utils";
import { calendarVariants, calendarHeaderVariants, calendarDayVariants } from "./CalendarVariants";

interface CalendarProps {
  selectedDates: Date[];
  onDateSelect: (date: Date) => void;
  disablePast?: boolean;
  disableFuture?: boolean;
  className?: string;
  variant?: "default" | "month-year-picker" | "range-picker" ;
  color?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

export const Calendar: React.FC<CalendarProps> = ({
  selectedDates = [],
  onDateSelect,
  disablePast = false,
  disableFuture = false,
  className = "",
  variant = "month-year-picker",
  color = "default",
  size = "md"
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  

  const handleMonthChange = (month: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), month));
  };

  const handleYearChange = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth()));
  };

  return (
    <div className={cn(calendarVariants({ color, size, className }))}>
      {/*  Header */}
      <CalendarHeader
        currentMonth={currentMonth}
        variant={variant}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
        onPrevMonth={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
        onNextMonth={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
        onToday={() => setCurrentMonth(new Date())}
      />

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {daysOfWeek.map((day, index) => (
          <div key={`${day}-${index}`} className="font-bold text-gray-400">
            {day}
          </div>
        ))}
        <CalendarGrid
          currentMonth={currentMonth}
          selectedDates={selectedDates}
          range={range}
          variant={variant}
          disablePast={disablePast}
          disableFuture={disableFuture}
          onDateSelect={(date) => {
            if (variant === "range-picker") {
              if (!range[0] || range[1]) {
                setRange([date, null]);
              } else {
                const sorted = [range[0], date].sort((a, b) => a!.getTime() - b!.getTime());
                setRange([sorted[0], sorted[1]]);
                onDateSelect(date);
              }
            } else {
              onDateSelect(date);
            }
          }}
        />
      </div>
    </div>
  );
};

// CalendarHeader.tsx
interface CalendarHeaderProps {
  currentMonth: Date;
  variant: "default" | "month-year-picker" | "range-picker";
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  variant,
  onMonthChange,
  onYearChange,
  onPrevMonth,
  onNextMonth,
  onToday
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

// CalendarGrid.tsx
interface CalendarGridProps {
  currentMonth: Date;
  selectedDates: Date[];
  range: [Date | null, Date | null];
  variant: "default" | "month-year-picker" | "range-picker";
  disablePast: boolean;
  disableFuture: boolean;
  onDateSelect: (date: Date) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentMonth,
  selectedDates,
  range,
  variant,
  disablePast,
  disableFuture,
  onDateSelect
}) => {
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const today = new Date();

  return (
    <>
      {Array.from({ length: firstDayIndex }).map((_, index) => (
        <div key={`empty-${index}`} />
      ))}
      
      {Array.from({ length: daysInMonth }, (_, day) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day + 1);
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = selectedDates.some(d => d.toDateString() === date.toDateString());
        const isDisabled = (disablePast && date < today) || (disableFuture && date > today);
        const [rangeStart, rangeEnd] = range;
        const isInRange = rangeStart && rangeEnd && date >= rangeStart && date <= rangeEnd;
        const isRangeEdge = rangeStart?.toDateString() === date.toDateString() || 
                          rangeEnd?.toDateString() === date.toDateString();

        return (
          <button
            key={day}
            className={cn(
              calendarDayVariants({
                isToday,
                isSelected,
                isDisabled,
                isInRange: variant === "range-picker" && isInRange,
                isRangeEdge
              })
            )}
            onClick={() => !isDisabled && onDateSelect(date)}
            disabled={isDisabled}
          >
            {day + 1}
          </button>
        );
      })}
    </>
  );
};

// Month/Year Pickers
const MonthPicker: React.FC<{ month: number; onChange: (month: number) => void }> = ({ month, onChange }) => (
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

const YearPicker: React.FC<{ year: number; onChange: (year: number) => void }> = ({ year, onChange }) => (
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