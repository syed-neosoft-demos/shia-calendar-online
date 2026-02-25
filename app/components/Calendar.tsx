import { CalendarDayProps, CalendarEvent } from "@/app/utils/types";
import { getEventsForDate } from "../utils/helper";
export function CalendarDay({
  day,
  isCurrentMonth,
  isToday,
  isSelected,
  onClick,
  hijriDate,
}: CalendarDayProps) {
  if (!day) {
    return <div className="aspect-square" />;
  }
  const events: CalendarEvent[] = getEventsForDate(
    `${hijriDate?.day}-${hijriDate?.monthName}`,
  );

  return (
    <button
      onClick={onClick}
      className={`
        aspect-square p-2 rounded-lg transition-all duration-200
        flex flex-col items-center justify-between
        border-2
        ${isCurrentMonth ? "text-white" : "text-gray-600"}
        ${isToday ? "border-blue-500 bg-blue-500/10" : "border-transparent"}
        ${isSelected ? "border-white bg-white/10" : ""}
        ${!isToday && !isSelected ? "hover:bg-white/5 hover:border-gray-700" : ""}
      `}
    >
      <div className="flex flex-col items-center w-full">
        <span
          className={`text-lg font-semibold ${isToday ? "text-blue-400" : ""}`}
        >
          {day}
        </span>
        <span className="text-gray-400 text-xs">{hijriDate?.day}</span>
      </div>

      {events.length > 0 && (
        <div className="flex gap-1 mt-1">
          {events.filter((e) => e.event_type === "celebration")?.length > 0 && (
            <div className="bg-green-400 rounded-full w-1.5 h-1.5" />
          )}
          {events.filter((e) => e.event_type === "martyrdom")?.length > 0 && (
            <div className="bg-red-400 rounded-full w-1.5 h-1.5" />
          )}
        </div>
      )}
    </button>
  );
}
