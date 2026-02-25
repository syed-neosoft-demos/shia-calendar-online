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
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  onClick: () => void;
  hijriDate?: HijriDate | null;
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  calendarDays: any;
};

export type HijriDate = {
  year: number;
  month: number;
  day: number;
  monthName?: string;
};

export type IslamicDate = {
  year: number;
  month: number; // 1–12
  day: number; // 1–30
};
