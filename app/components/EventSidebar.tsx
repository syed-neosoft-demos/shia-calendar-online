/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExternalLink } from "lucide-react";
import { EventsSidebarProps } from "../utils/types";

export function EventsSidebar({
  events,
  monthName,
  year,
  calendarDays,
}: EventsSidebarProps) {
  const matchedEvents = events.filter((event) =>
    calendarDays.some((day: any) =>
      event.event_date.includes(
        day.hijriDate?.day +
          "-" +
          day.hijriDate?.monthName?.replace?.(" ", "-").toLowerCase(),
      ),
    ),
  );

  const getEventColor = (type: string) => {
    switch (type) {
      case "celebration":
        return "bg-green-400";
      case "commemoration":
        return "bg-red-400";
      default:
        return "bg-yellow-400";
    }
  };
  const getDate = (eventDate: string) => {
    const [day, monthName] = eventDate.split("-");
    const dayNumber = parseInt(day, 10);
    const matchedDay = calendarDays.find(
      (day: any) =>
        day.hijriDate?.day === dayNumber &&
        day.hijriDate?.monthName?.toLocaleLowerCase() ===
          monthName.toLocaleLowerCase(),
    );
    return (
      matchedDay?.date?.toLocaleDateString("en-GB").replaceAll("/", "-") || ""
    );
  };
  return (
    <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
      <h2 className="mb-6 font-bold text-white text-2xl">
        Events for {monthName} {year}
      </h2>

      {matchedEvents.length === 0 ? (
        <p className="text-gray-400">No events scheduled for this month.</p>
      ) : (
        <div className="space-y-4">
          {matchedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-800/50 p-4 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
            >
              <div className="flex items-start gap-3">
                <div
                  className={`w-2 h-2 rounded-full ${getEventColor(event.event_type)} mt-2 flex-shrink-0`}
                />
                <div className="flex-1">
                  <h3 className="mb-1 font-semibold text-white">
                    {event.title}
                  </h3>
                  <p className="mb-1 text-gray-400 text-sm">
                    {getDate(event.event_date)}
                  </p>
                  <p className="mb-1 text-gray-400 text-sm">
                    {event.event_date}
                  </p>

                  {event.description && (
                    <p className="mt-2 text-gray-300 text-sm">
                      {event.description}
                    </p>
                  )}
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
