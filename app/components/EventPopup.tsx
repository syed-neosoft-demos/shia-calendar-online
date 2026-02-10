
import { X, Calendar as CalendarIcon, Clock, AlignLeft } from "lucide-react";
import { type CalendarEvent } from "./Calendar";

interface EventPopupProps {
  isOpen: boolean;
  onClose: () => void;
  events: CalendarEvent[];
  date: Date | null;
}

export function EventPopup({ isOpen, onClose, events, date }: EventPopupProps) {
  if (!isOpen || !date) return null;

  const getEventColor = (type: string) => {
    switch (type) {
      case "celebration":
        return "bg-green-500";
      case "commemoration":
        return "bg-red-500";
      default:
        return "bg-yellow-500";
    }
  };

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm p-4">
      <div 
        className="bg-gray-900 border border-gray-800 shadow-2xl rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-800 bg-gray-900/50">
          <div>
            <h2 className="font-bold text-xl text-white">
              {date.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </h2>
            <p className="text-gray-400 text-sm">
              {events.length} {events.length === 1 ? "Event" : "Events"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4 p-4 overflow-y-auto custom-scrollbar">
          {events.length === 0 ? (
            <div className="py-8 text-center text-gray-400">
              No events for this day
            </div>
          ) : (
            events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-800/50 p-4 border border-gray-700 hover:border-gray-600 rounded-xl transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${getEventColor(
                      event.event_type
                    )} mt-2 shrink-0`}
                  />
                  <div className="flex-1 space-y-2">
                    <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                       <span className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md">
                        <CalendarIcon size={12} />
                        {event.hijri_date}
                      </span>
                    </div>

                    {event.description && (
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 bg-gray-900/50">
          <button
            onClick={onClose}
            className="w-full bg-gray-800 hover:bg-gray-700 py-2.5 rounded-lg font-medium text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
