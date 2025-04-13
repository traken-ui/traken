import React, {useState} from "react";
import { calendarHeaderVariants } from "./CalendarVariants";
import { MonthPicker } from "./MonthPicker";
import { YearPicker } from "./YearPicker";
import { cn } from "@/lib/utils";
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
        "px-4 py-2 bg-primary-700 text-white rounded-lg hover:bg-primary-600 transition-all",
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
      <NavigationButtons
      onNextMonth={onNextMonth}
      onPrevMonth={onPrevMonth}
      />
    )}
  </div>
)};