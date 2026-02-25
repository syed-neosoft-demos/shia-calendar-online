export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  event_type:
  | "celebration"
  | "martyrdom"
  | "commemoration"
  | "historical"
  | "others";
};

export type CalendarDayProps = {
  day: number | null;
  hijriDay: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  events: CalendarEvent[];
  onClick: () => void;
  hijriDate?: HijriDate;
};

export type EventPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  events: CalendarEvent[];
  date: Date | null;
};

export type EventsSidebarProps = {
  events: CalendarEvent[];
  monthName: string;
  year: number;
};

export type HijriDate = {
  year: number;
  month: number;
  day: number;
  monthName?: string;
};
