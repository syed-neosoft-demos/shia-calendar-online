import { ExternalLink } from "lucide-react";
export interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_type: "celebration" | "commemoration" | "other";
  gregorian_date: string;
  hijri_date: string;
  created_at: string;
}

interface EventsSidebarProps {
  events: CalendarEvent[];
  monthName: string;
  year: number;
}

export function EventsSidebar({ events, monthName, year }: EventsSidebarProps) {
  const sortedEvents = [...events].sort(
    (a, b) =>
      new Date(a.event_date).getTime() - new Date(b.event_date).getTime(),
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

  return (
    <div className="bg-gray-900 p-6 border border-gray-800 rounded-lg">
      <h2 className="mb-6 font-bold text-white text-2xl">
        Events for {monthName} {year}
      </h2>

      {sortedEvents.length === 0 ? (
        <p className="text-gray-400">No events scheduled for this month.</p>
      ) : (
        <div className="space-y-4">
          {sortedEvents.map((event) => (
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
                    {event.gregorian_date}
                  </p>
                  <p className="text-gray-500 text-sm">{event.hijri_date}</p>
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
