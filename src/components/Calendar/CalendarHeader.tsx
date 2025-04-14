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
}

export const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  variant,
  onMonthChange,
  onYearChange,
  onPrevMonth,
  onNextMonth,
  onToday,
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
  <div className={calendarHeaderVariants({ variant: variant === "range-picker" ? "default" : variant })}>
    <Button
      onClick={handleTodayClick}
      size="md"
      className={cn( 
        "px-3 py-1.5 bg-primary-700 text-white border border-primary-600 rounded-lg hover:bg-primary-600 ",
        // {    custom styling if needed
        //   "ring-2 ring-primary-400": todayClicked,
        // }
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
        />
        </div>
        <div ref={yearPickerRef}>
        <YearPicker 
          year={currentMonth.getFullYear()} 
          onChange={onYearChange} 
          open={isYearOpen}
          onOpenChange={setIsYearOpen}
        />
        </div>
      </div>
    ) : (
      <>
    <span className="text-base-50 text-lg font-semibold flex-1 text-center">
      {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
    </span>
    <NavigationButtons
      onPrevMonth={onPrevMonth}
      onNextMonth={onNextMonth}
    />
  </>
    )}
  </div>
)
};