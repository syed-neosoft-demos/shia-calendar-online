"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react";
import { CalendarDay } from "./components/Calendar";
import { EventsSidebar } from "./components/EventSidebar";
import { EventPopup } from "./components/EventPopup";
import { getHijriMonthRange, HIJRI_MONTHS } from "./utils/date";
import Header from "./components/Header";
import { DAYS_OF_WEEK, MONTH_NAMES } from "./utils/date";
import events from "./lib/events";
import {
  generateCalendarDays,
  getEventsForDate,
  isSelected,
  isToday,
} from "./utils/helper";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(year, month - 1));
    setSelectedDate(null);
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1));
    setSelectedDate(null);
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const handleDayClick = (date: string) => {
    setSelectedDate(new Date());
    setSelectedEvent(date);
    const dayEvents = getEventsForDate(date);
    if (dayEvents.length > 0) {
      setIsPopupOpen(true);
    }
  };

  const hijriRange = getHijriMonthRange(year, month);
  const hijriDisplay =
    hijriRange.start.month === hijriRange.end.month
      ? `${HIJRI_MONTHS[hijriRange.start.month - 1]} ${hijriRange.start.year}`
      : `${HIJRI_MONTHS[hijriRange.start.month - 1]} - ${HIJRI_MONTHS[hijriRange.end.month - 1]} ${hijriRange.end.year}`;

  const calendarDays = generateCalendarDays(year, month);

  return (
    <div className="bg-gray-950 p-4 md:p-8 min-h-screen text-white">
      <div className="mx-auto max-w-7xl">
        <Header />
        <div className="gap-8 grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <h1 className="font-bold text-3xl">
                    {MONTH_NAMES[month]} {year}
                  </h1>
                  <div className="flex gap-2">
                    <button
                      onClick={goToToday}
                      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 border border-gray-700 rounded-lg transition-colors"
                    >
                      <CalendarIcon size={18} />
                      <span className="text-sm">Today</span>
                    </button>
                    <button
                      onClick={goToPreviousMonth}
                      className="bg-gray-800 hover:bg-gray-700 p-2 border border-gray-700 rounded-lg transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={goToNextMonth}
                      className="bg-gray-800 hover:bg-gray-700 p-2 border border-gray-700 rounded-lg transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
                <p className="text-gray-400">{hijriDisplay}</p>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-green-400 rounded-full w-3 h-3" />
                  <span className="text-gray-300 text-sm">Celebration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-red-400 rounded-full w-3 h-3" />
                  <span className="text-gray-300 text-sm">Commemoration</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-yellow-400 rounded-full w-3 h-3" />
                  <span className="text-gray-300 text-sm">Other Events</span>
                </div>
              </div>

              <div className="gap-2 grid grid-cols-7">
                {DAYS_OF_WEEK.map((day) => (
                  <div
                    key={day}
                    className="py-2 font-semibold text-gray-400 text-sm text-center"
                  >
                    {day}
                  </div>
                ))}

                {calendarDays.map((day, index) => (
                  <CalendarDay
                    key={index}
                    day={day.gregorian}
                    isCurrentMonth={day.gregorian !== null}
                    isToday={isToday(day.date)}
                    isSelected={isSelected(day.date, selectedDate)}
                    onClick={() =>
                      day.hijriDate?.day &&
                      handleDayClick(
                        `${day.hijriDate.day}-${day.hijriDate.monthName}`,
                      )
                    }
                    hijriDate={day.hijriDate}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <EventsSidebar
              events={events}
              monthName={MONTH_NAMES[month]}
              year={year}
              calendarDays={calendarDays}
            />
          </div>
        </div>
      </div>
      {selectedDate && (
        <EventPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          events={getEventsForDate(selectedEvent || "")}
          date={selectedDate}
        />
      )}
      <Header />
    </div>
  );
}
