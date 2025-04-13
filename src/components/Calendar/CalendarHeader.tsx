
import React, {useState} from "react";
import { calendarHeaderVariants } from "./CalendarVariants";
import { MonthPicker } from "./MonthPicker";
import { YearPicker } from "./YearPicker";
import { cn } from "@/lib/utils";


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
  todayClicked,

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
    <button
      onClick={handleTodayClick}


      className={cn( 
        "px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all",
        {
          "scale-105 ring-2 ring-blue-400": todayClicked,
        }
      )}
    >
      Today
    </button>

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

)};

