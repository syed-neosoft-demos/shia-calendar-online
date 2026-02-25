"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react";
import { CalendarDay } from "../components/Calendar";
import {
  gregorianToHijri,
  getHijriMonthRange,
  HIJRI_MONTHS,
} from "../utils/hijriDates";
import { CalendarEvent } from "../utils/types";
import { DAYS_OF_WEEK, MONTH_NAMES } from "../utils/data";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  console.log("loading :>> ", loading);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);

      const data = [
        {
          id: "b0b7b5de-82dd-4f73-b56f-a1fc9d33b7",
          title: "Lailat al-Miraj",
          description:
            "The Night Journey and Ascension of the Prophet Muhammad (peace be upon him)",
          event_date: "2026-02-17",
          event_type: "celebration",
          gregorian_date: "February 17, 2026",
          hijri_date: "27 Rajab 1447",
          created_at: "2026-02-10T06:25:03.492081+00:00",
        },
        {
          id: "b0b7b5de-8dd-4f73-b56f-a1fc9d33b697",
          title: "Lailat al-Miraj",
          description:
            "The Night Journey and Ascension of the Prophet Muhammad (peace be upon him)",
          event_date: "2026-02-15",
          event_type: "commemoration",
          gregorian_date: "February 17, 2026",
          hijri_date: "27 Rajab 1447",
          created_at: "2026-02-10T06:25:03.492081+00:00",
        },
        {
          id: "b0b7b5de-82dd-4f73-b56f-a1d33b697",
          title: "Lailat al-Miraj",
          description:
            "The Night Journey and Ascension of the Prophet Muhammad (peace be upon him)",
          event_date: "2026-02-12",
          event_type: "others",
          gregorian_date: "February 17, 2026",
          hijri_date: "27 Rajab 1447",
          created_at: "2026-02-10T06:25:03.492081+00:00",
        },
      ];
      setEvents(data as CalendarEvent[]);
      setLoading(false);
    };
    fetchEvents();
  }, [year, month]);

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

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

  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isSelected = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const getEventsForDate = (date: Date | null): CalendarEvent[] => {
    if (!date) return [];
    const dateStr = date.toISOString().split("T")[0];
    return events.filter((event) => event.event_date === dateStr);
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    const dayEvents = getEventsForDate(date);
    if (dayEvents.length > 0) {
      setIsPopupOpen(true);
    }
  };
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const days: Array<{
      gregorian: number | null;
      hijri: number;
      date: Date | null;
    }> = [];

    for (let i = 0; i < firstDay; i++) {
      days.push({ gregorian: null, hijri: 0, date: null });
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const hijri = gregorianToHijri(date);
      days.push({ gregorian: day, hijri: hijri.day, date });
    }

    return days;
  };
  const calendarDays = generateCalendarDays();

  return (
    <div className="bg-gray-950 p-4 md:p-8 min-h-screen text-white">
      {/* <Header /> */}
      <div className="mx-auto max-w-7xl">
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
                {/* <p className="text-gray-400">{hijriDisplay}</p> */}
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
                    hijriDay={Math.floor(day.hijri)}
                    isCurrentMonth={day.gregorian !== null}
                    isToday={isToday(day.date)}
                    isSelected={isSelected(day.date)}
                    events={getEventsForDate(day.date)}
                    onClick={() => day.date && handleDayClick(day.date)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
