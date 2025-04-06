import React from "react";
import { cn } from "src/lib/utils";
import { calendarDayVariants } from "./CalendarVariants";

interface CalendarGridProps {
  currentMonth: Date;
  selectedDates: Date[];
  range: [Date | null, Date | null];
  variant: "default" | "month-year-picker" | "range-picker";
  disablePast: boolean;
  disableFuture: boolean;
  onDateSelect: (date: Date) => void;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentMonth,
  selectedDates,
  range,
  variant,
  disablePast,
  disableFuture,
  onDateSelect,
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
                isRangeEdge,
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