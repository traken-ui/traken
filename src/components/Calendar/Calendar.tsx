import React, { useState } from "react";
import { cn } from "src/lib/utils";
import { calendarVariants } from "./CalendarVariants";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";

interface CalendarProps {
  selectedDates: Date[];
  onDateSelect: (date: Date) => void;
  disablePast?: boolean;
  disableFuture?: boolean;
  className?: string;
  variant?: "default" | "month-year-picker" | "range-picker";
  color?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

export  const Calendar: React.FC<CalendarProps> = ({
  selectedDates = [],
  onDateSelect,
  disablePast = false,
  disableFuture = false,
  className = "",
  variant = "month-year-picker",
  color = "default",
  size = "md",
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
          onDateSelect={onDateSelect}
        />
      </div>
    </div>
  );
};