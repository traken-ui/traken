import React, { useState } from "react";
import { cn } from "../../lib/utils";
import { calendarVariants } from "./CalendarVariants";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarGrid } from "./CalendarGrid";

interface CalendarProps {
  selectedDates?: Date[];
  onDateSelect: (date: Date) => void;
  disablePast?: boolean;
  disableFuture?: boolean;
  className?: string;
  variant?: "default" | "month-year-picker" | "range-picker";
  color?: "default" | "primary" | "secondary"| "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}

const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

export const Calendar: React.FC<CalendarProps> = ({
  selectedDates = [],
  onDateSelect,
  disablePast = false,
  disableFuture = false,
  className = "",
  variant = "default",
  color = "default",
  size = "md",
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [todayClicked, setTodayClicked] = useState(false);

  const handleMonthChange = (month: number) => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), month));
  };

  const handleYearChange = (year: number) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth()));
  };

  const handleDateSelect = (date: Date) => {
    if (variant === "range-picker") {
      if (!range[0] || (range[0] && range[1])) {
        setRange([date, null]);
      } else if (range[0] && !range[1]) {
        const sorted = [range[0], date].sort((a, b) => a.getTime() - b.getTime());
        setRange([sorted[0], sorted[1]]);
      }
      onDateSelect(date);
    } else {
      onDateSelect(date);
    }
  };

  const handleDateHover = (date: Date | null) => {
    if (variant === "range-picker" && range[0] && !range[1]) {
      setHoveredDate(date);
    }
  };

  const handleTodayClick = () => {
    const today= new Date();
    setCurrentMonth(today);
    setTodayClicked(true);

    //clear previous selection
    if (variant === "range-picker") {
      setRange([today, today]);
    }
    onDateSelect(today); 
    setTimeout(() => {
      setTodayClicked(false);
    }, 200);  
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
        onToday={handleTodayClick}
        todayClicked={todayClicked}  
      />

      <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
        {daysOfWeek.map((day, index) => (
          <div key={`${day}-${index}`} className="font-bold text-base-50 text-default-400 py-1 flex justify-center">
            <div className="w-9">{day}</div>
          </div>
        ))}
        <CalendarGrid
          currentMonth={currentMonth}
          selectedDates={variant === "range-picker" && range[1] ? [range[0], range[1]].filter((date): date is Date => date !== null) : selectedDates}
          range={range}
          variant={variant}
          disablePast={disablePast}
          disableFuture={disableFuture}
          onDateSelect={handleDateSelect}
          hoveredDate={hoveredDate}
          onDateHover={handleDateHover}
        />
      </div>
    </div>
  );
};