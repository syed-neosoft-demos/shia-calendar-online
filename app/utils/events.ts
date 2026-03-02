import { CalendarEvent } from "../utils/types";

//month 1
const muharram: CalendarEvent[] = [
  {
    id: "011",
    title: "Islamic New Year",
    description: "Beginning of the Islamic Hijri year (1 Muharram).",
    event_type: "commemoration",
    event_date: "1-muharram",
  },
  {
    id: "012",
    title: "Arrival at Karbala",
    description: "Imam Hussain and his companions reach the land of Karbala.",
    event_type: "historical",
    event_date: "2-muharram",
  },
  {
    id: "013",
    title: "Water Access Cut",
    description:
      "The supply of water to the camp of Imam Hussain is strictly cut off by the forces of Yazid.",
    event_type: "commemoration",
    event_date: "7-muharram",
  },
  {
    id: "014",
    title: "Day of Tasu'a",
    description:
      "The ninth day of Muharram, marking the final night before the battle and honoring Abbas ibn Ali.",
    event_type: "commemoration",
    event_date: "9-muharram",
  },
  {
    id: "015",
    title: "Day of Ashura",
    description:
      "The martyrdom of Imam Hussain and his 72 followers in the Battle of Karbala.",
    event_type: "martyrdom",
    event_date: "10-muharram",
  },
  {
    id: "016",
    title: "Shaam-e-Ghariban",
    description:
      "The night of the oppressed; mourning the aftermath for the women and children of the Ahl al-Bayt.",
    event_type: "commemoration",
    event_date: "10-muharram",
  },
  {
    id: "017",
    title: "Martyrdom of Imam Zain-ul-Abideen",
    description:
      "Commemorating the death of the fourth Imam, the son of Imam Hussain and survivor of Karbala.",
    event_type: "martyrdom",
    event_date: "25-muharram",
  },
];

//month 2

const safar: CalendarEvent[] = [
  {
    id: "021",
    title: "Arrival of the Captives in Damascus",
    description:
      "The family of Imam Husayn and the surviving companions are brought as captives into the court of Yazid in Damascus.",
    event_type: "historical",
    event_date: "1-safar",
  },
  {
    id: "022",
    title: "Martyrdom of Lady Ruqayyah bint Husayn",
    description:
      "Commemoration of the passing of the young daughter of Imam Husayn in the prison of Damascus.",
    event_type: "martyrdom",
    event_date: "3-safar",
  },
  {
    id: "023",
    title: "Birth of Imam Musa al-Kazim",
    description:
      "Celebration of the birth of the seventh Imam, Musa ibn Ja'far al-Kazim.",
    event_type: "celebration",
    event_date: "7-safar",
  },
  {
    id: "024",
    title: "Arbaeen",
    description:
      "The 40th day after Ashura commemorating Imam Husayn and the martyrs of Karbala.",
    event_type: "commemoration",
    event_date: "20-safar",
  },
  {
    id: "025",
    title: "Martyrdom of Prophet Muhammad",
    description: "Commemoration of the passing of the Holy Prophet Muhammad.",
    event_type: "martyrdom",
    event_date: "28-safar",
  },
  {
    id: "026",
    title: "Martyrdom of Imam Hasan al-Mujtaba",
    description:
      "Commemoration of the martyrdom of the second Imam, Hasan ibn Ali.",
    event_type: "martyrdom",
    event_date: "28-safar",
  },
  {
    id: "027",
    title: "Martyrdom of Imam Ali al-Rida",
    description:
      "Commemoration of the martyrdom of the eighth Imam, Ali ibn Musa al-Rida.",
    event_type: "martyrdom",
    event_date: "29-safar",
  },
];

//month 3

const rabiAlAwwal: CalendarEvent[] = [
  {
    id: "031",
    title: "Hijrah of Prophet Muhammad",
    description:
      "Commemoration of the migration (Hijrah) of Prophet Muhammad from Mecca to Medina.",
    event_type: "historical",
    event_date: "1-rabi-al-awwal",
  },
  {
    id: "032",
    title: "Martyrdom of Imam Hasan al-Askari",
    description:
      "Commemoration of the martyrdom of the eleventh Imam, Hasan ibn Ali al-Askari.",
    event_type: "martyrdom",
    event_date: "8-rabi-al-awwal",
  },
  {
    id: "033",
    title: "Beginning of the Imamate of Imam al-Mahdi",
    description:
      "Commemoration of the commencement of the Imamate of Imam Muhammad ibn Hasan al-Mahdi.",
    event_type: "commemoration",
    event_date: "9-rabi-al-awwal",
  },
  {
    id: "034",
    title: "Marriage of Prophet Muhammad and Lady Khadijah",
    description:
      "Commemoration of the blessed marriage of Prophet Muhammad and Lady Khadijah bint Khuwaylid.",
    event_type: "commemoration",
    event_date: "10-rabi-al-awwal",
  },
  {
    id: "035",
    title: "Birth of Prophet Muhammad",
    description:
      "Celebration of the birth of Prophet Muhammad (according to Shia tradition).",
    event_type: "celebration",
    event_date: "17-rabi-al-awwal",
  },
  {
    id: "036",
    title: "Birth of Imam Ja'far al-Sadiq",
    description:
      "Celebration of the birth of the sixth Imam, Ja'far ibn Muhammad al-Sadiq.",
    event_type: "celebration",
    event_date: "17-rabi-al-awwal",
  },
];

//month 4
const rabiAlThani: CalendarEvent[] = [
  {
    id: "044",
    title: "Birth of Imam Hasan al-Askari",
    description:
      "Celebration of the birth of the eleventh Imam, Hasan ibn Ali al-Askari.",
    event_type: "celebration",
    event_date: "8-rabi-al-thani",
  },
  {
    id: "045",
    title: "Demise of Lady Fatima al-Ma'suma",
    description:
      "Commemoration of the passing of Lady Fatima bint Musa al-Kazim, sister of Imam Ali al-Rida, buried in Qom.",
    event_type: "martyrdom",
    event_date: "10-rabi-al-thani",
  },
];

//month 5
const ramadan: CalendarEvent[] = [
  {
    id: "037",
    title: "Beginning of the Month of Ramadan",
    description:
      "Commencement of the blessed month of fasting, prayer, and revelation of the Qur'an.",
    event_type: "commemoration",
    event_date: "1-ramadan",
  },
  {
    id: "038",
    title: "Demise of Lady Khadijah",
    description:
      "Commemoration of the passing of Lady Khadijah bint Khuwaylid, the first believer and wife of the Prophet.",
    event_type: "martyrdom",
    event_date: "10-ramadan",
  },
  {
    id: "039",
    title: "Birth of Imam Hasan al-Mujtaba",
    description: "Celebration of the birth of the second Imam, Hasan ibn Ali.",
    event_type: "celebration",
    event_date: "15-ramadan",
  },
  {
    id: "040",
    title: "Battle of Badr",
    description:
      "Commemoration of the first major battle of Islam in which the Muslims achieved victory.",
    event_type: "historical",
    event_date: "17-ramadan",
  },
  {
    id: "041",
    title: "Striking of Imam Ali",
    description:
      "Commemoration of the night Imam Ali ibn Abi Talib was struck by Ibn Muljam while in prayer in Kufa.",
    event_type: "martyrdom",
    event_date: "19-ramadan",
  },
  {
    id: "042",
    title: "Martyrdom of Imam Ali",
    description:
      "Commemoration of the martyrdom of the first Imam, Ali ibn Abi Talib.",
    event_type: "martyrdom",
    event_date: "21-ramadan",
  },
  {
    id: "043",
    title: "Laylat al-Qadr",
    description:
      "The Night of Decree, regarded as the greatest night of the year; widely observed on the 23rd of Ramadan in Shia tradition.",
    event_type: "commemoration",
    event_date: "23-ramadan",
  },
];

const events: CalendarEvent[] = [
  ...muharram,
  ...safar,
  ...rabiAlAwwal,
  ...rabiAlThani,
  ...ramadan,
];

export default events;
