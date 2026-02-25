import { CalendarEvent } from "../utils/types";

const muharram: CalendarEvent[] = [
  {
    id: "001",
    title: "Islamic New Year",
    description: "Beginning of the Islamic Hijri year (1 Muharram)",
    event_type: "commemoration",
    event_date: "1-muharram",
  },
  {
    id: "002",
    title: "Ashura",
    description: "Commemoration of the martyrdom of Imam Hussein",
    event_type: "martyrdom",
    event_date: "10-muharram",
  },
  {
    id: "003",
    title: "Arba'een",
    description: "Commemoration of the martyrdom of Imam Hussein",
    event_type: "martyrdom",
    event_date: "20-safar",
  },
];

const ramadan: CalendarEvent[] = [
  {
    id: "901",
    title: "Month of Blessings",
    description:
      "Ramadan is the ninth month of the Islamic calendar, observed by Muslims worldwide as a month of fasting, prayer, reflection, and community.",
    event_type: "celebration",
    event_date: "1-ramadan",
  },
  {
    id: "902",
    title: "Wafat of lady Khadiza",
    description:
      "Commemoration of the death of Khadiza bint-e-Abdullah, the first wife of Prophet Muhammad (PBUH)",
    event_type: "martyrdom",
    event_date: "10-ramadan",
  },
  {
    id: "903",
    title: "Arba'een",
    description: "Commemoration of the martyrdom of Imam Hussein",
    event_type: "martyrdom",
    event_date: "20-safar",
  },
];

const events: CalendarEvent[] = [...muharram, ...ramadan];

export default events;
