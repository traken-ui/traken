import React, {useState} from "react";
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

  const handleTodayClick = ()=>{
    onToday()
    setIsMonthOpen(false)
    setIsYearOpen(false)
  }

  return (
  <div className={calendarHeaderVariants({ variant: variant === "range-picker" ? "default" : variant })}>
    <Button
      onClick={handleTodayClick}
      size="md"
      className={cn( 
        "px-3 py-1.5 bg-base-600 text-white border border-base-500 rounded-lg",
        // {    custom styling if needed
        //   "ring-2 ring-primary-400": todayClicked,
        // }
      )}
    >
      Today
    </Button>

    {variant === "month-year-picker" ? (
      <div className="flex gap-2 select-none">
        <MonthPicker 
          month={currentMonth.getMonth()} 
          onChange={onMonthChange} 
          open={isMonthOpen}
          onOpenChange={setIsMonthOpen}
        />
        <YearPicker 
          year={currentMonth.getFullYear()} 
          onChange={onYearChange} 
          open={isYearOpen}
          onOpenChange={setIsYearOpen}
        />
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