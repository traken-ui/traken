import React, {useEffect, useRef, useState} from "react";
import { calendarHeaderVariants } from "./CalendarVariants";
import { MonthPicker } from "./MonthPicker";
import { YearPicker } from "./YearPicker";
import {cn} from '../../lib/utils'
import Button from "../button/Button";
import { NavigationButtons } from "./NavigationButtons";

interface CalendarHeaderProps {
  currentMonth: Date;
  variant: "default" | "month-year-picker" | "range-picker";
  onMonthChange: (month: number) => void;
  onYearChange: (year: number) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  todayClicked?: boolean;
  color?: "light" | "dark";
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  variant,
  onMonthChange,
  onYearChange,
  onPrevMonth,
  onNextMonth,
  onToday,
  color = "dark",
}) => {
  const [isMonthOpen, setIsMonthOpen] = useState(false)
  const [isYearOpen, setIsYearOpen] = useState(false)
  const monthPickerRef = useRef<HTMLDivElement>(null);
  const yearPickerRef = useRef<HTMLDivElement>(null);

  const handleTodayClick = ()=>{
    onToday()
    setIsMonthOpen(false)
    setIsYearOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        monthPickerRef.current &&
        !monthPickerRef.current.contains(event.target as Node) &&
        yearPickerRef.current &&
        !yearPickerRef.current.contains(event.target as Node)
      ) {
        setIsMonthOpen(false);
        setIsYearOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
  <div className={calendarHeaderVariants({ variant: variant === "range-picker" ? "default" : variant,color })}>
    <Button
      onClick={handleTodayClick}
      className={cn(
        "px-3 py-1.5 border rounded-lg",
        color === "dark" 
          ? "bg-gray-700 text-white border-gray-600 hover:bg-gray-600" 
          : "bg-gray-200 text-gray-800 border-gray-300 hover:bg-gray-300"
      )}
    >
      Today
    </Button>

    {variant === "month-year-picker" ? (
      <div className="flex gap-2 select-none">
        <div ref={monthPickerRef}>
        <MonthPicker 
          month={currentMonth.getMonth()} 
          onChange={onMonthChange} 
          open={isMonthOpen}
          onOpenChange={setIsMonthOpen}
          color={color}
        />
        </div>
        <div ref={yearPickerRef}>
        <YearPicker 
          year={currentMonth.getFullYear()} 
          onChange={onYearChange} 
          open={isYearOpen}
          onOpenChange={setIsYearOpen}
          color={color}
        />
        </div>
      </div>
    ) : (
      <>
    <span className="text-lg font-semibold flex-1 text-center">
      {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
    </span>
    <NavigationButtons
      onPrevMonth={onPrevMonth}
      onNextMonth={onNextMonth}
      color={color}
    />
  </>
    )}
  </div>
)
};