import React from "react";
import { cn } from "../../lib/utils";
import { calendarDayVariants } from "./CalendarVariants";

interface CalendarGridProps {
  currentMonth: Date;
  selectedDates: Date[];
  range: [Date | null, Date | null];
  variant: "default" | "month-year-picker" | "range-picker";
  disablePast: boolean;
  disableFuture: boolean;
  onDateSelect: (date: Date) => void;
  hoveredDate: Date | null;
  onDateHover: (date: Date | null) => void;
}

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  currentMonth,
  selectedDates,
  range,
  variant,
  disablePast,
  disableFuture,
  onDateSelect,
  hoveredDate,
  onDateHover,
}) => {
  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();
  const firstDayIndex = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  const today = new Date();

  return (
    <>
      {/* Empty days for alignment */}
      {Array.from({ length: firstDayIndex }).map((_, index) => (
        <div key={`empty-${index}`} />
      ))}

      {/* Calendar days */}
      {Array.from({ length: daysInMonth }, (_, day) => {
        const date = new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth(),
          day + 1
        );
        const isToday = date.toDateString() === today.toDateString();
        
        const isDisabled =
          (disablePast && date < today) || (disableFuture && date > today);

        // Range preview states
        const [rangeStart, rangeEnd] = range;
        const isInPreviewRange =
          variant === "range-picker" &&
          rangeStart &&
          !rangeEnd &&
          hoveredDate &&
          ((date > rangeStart && date < hoveredDate) ||
            (date < rangeStart && date > hoveredDate));
        const isPreviewEdge =
          variant === "range-picker" &&
          rangeStart &&
          !rangeEnd &&
          hoveredDate &&
          date.toDateString() === hoveredDate.toDateString();

        // Range selection states
        const isInRange =
          variant === "range-picker" &&
          rangeStart &&
          rangeEnd &&
          date >= rangeStart &&
          date <= rangeEnd;
        const isRangeStart =
          variant === "range-picker" &&
          rangeStart &&
          date.toDateString() === rangeStart.toDateString();
        const isRangeEnd =
          variant === "range-picker" &&
          rangeEnd &&
          date.toDateString() === rangeEnd.toDateString();
        
        const isSelected = variant === "range-picker" 
        ? (isRangeStart || isRangeEnd)
        : selectedDates.some(d => d.toDateString() === date.toDateString()) ||
          date.toDateString() === today.toDateString(); //today ko baad me new Date() kr dena nhi chala to 
          
        const isTodayHighlighted = isToday && selectedDates.length === 0; // Highlight today if no date is selected
        
        return (
        <div key={day} className="flex justify-center">
          <button
            key={day}
            className={cn(
              calendarDayVariants({
                isToday,
                isSelected,
                isDisabled,
                isPreviewRange: isInPreviewRange,
                isPreviewEdge,
                isTodayHighlighted,
              }),
              "w-9 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
              {
                "bg-blue-600 text-white": isSelected,
                "bg-blue-500/30": isInRange && !isSelected,
              }
            )}
            onClick={() => !isDisabled && onDateSelect(date)}
            onMouseEnter={() =>
              variant === "range-picker" && !isDisabled && onDateHover(date)
            }
            disabled={isDisabled}
          >
            {day + 1}
          </button>
        </div>
        );
      })}
    </>
  );
};