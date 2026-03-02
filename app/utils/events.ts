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
const jumadaAlAwwal: CalendarEvent[] = [
  {
    id: "051",
    title: "Battle of Mu'tah",
    description:
      "Commemoration of the Battle of Mu'tah in 8 AH, one of the earliest confrontations between Muslims and the Byzantine forces.",
    event_type: "historical",
    event_date: "1-jumada-al-awwal",
  },
  {
    id: "00525",
    title: "Birth of Lady Zaynab bint Ali",
    description:
      "Celebration of the birth of Lady Zaynab, daughter of Imam Ali and Lady Fatimah, known for her courage and leadership after Karbala.",
    event_type: "celebration",
    event_date: "5-jumada-al-awwal",
  },
  {
    id: "052",
    title: "First Narration of the Martyrdom of Lady Fatimah",
    description:
      "According to one historical narration, this date marks the martyrdom of Lady Fatimah al-Zahra, daughter of the Prophet Muhammad.",
    event_type: "martyrdom",
    event_date: "13-jumada-al-awwal",
  },
];

//month 6
const jumadaAlThani: CalendarEvent[] = [
  {
    id: "061",
    title: "Second Narration of the Martyrdom of Lady Fatimah",
    description:
      "According to another widely accepted narration, this date marks the martyrdom of Lady Fatimah al-Zahra, daughter of the Prophet Muhammad.",
    event_type: "martyrdom",
    event_date: "3-jumada-al-thani",
  },
  {
    id: "062",
    title: "Birth of Lady Fatimah al-Zahra",
    description:
      "Celebration of the birth of Lady Fatimah, daughter of the Prophet Muhammad, revered for her piety, knowledge, and status among the Ahl al-Bayt.",
    event_type: "celebration",
    event_date: "20-jumada-al-thani",
  },
  {
    id: "063",
    title: "Beginning of Ayyam al-Fatimiyyah (Second Period)",
    description:
      "Start of the commemorative days observed by many to mourn the martyrdom of Lady Fatimah according to the second narration.",
    event_type: "commemoration",
    event_date: "1-jumada-al-thani",
  },
];

//month 7
const rajab: CalendarEvent[] = [
  {
    id: "071",
    title: "Birth of Imam Muhammad al-Baqir",
    description:
      "Celebration of the birth of the fifth Imam, Muhammad ibn Ali al-Baqir, known for spreading knowledge and jurisprudence.",
    event_type: "celebration",
    event_date: "1-rajab",
  },
  {
    id: "072",
    title: "Birth of Imam Ali al-Naqi (al-Hadi)",
    description:
      "Celebration of the birth of the tenth Imam, Ali ibn Muhammad al-Hadi.",
    event_type: "celebration",
    event_date: "2-rajab",
  },
  {
    id: "073",
    title: "Martyrdom of Imam Ali al-Naqi (al-Hadi)",
    description:
      "Commemoration of the martyrdom of the tenth Imam, Ali ibn Muhammad al-Hadi.",
    event_type: "martyrdom",
    event_date: "3-rajab",
  },
  {
    id: "074",
    title: "Martyrdom of Imam Muhammad al-Baqir",
    description:
      "Commemoration of the martyrdom of the fifth Imam, Muhammad ibn Ali al-Baqir.",
    event_type: "martyrdom",
    event_date: "7-rajab",
  },
  {
    id: "075",
    title: "Birth of Imam Muhammad al-Jawad (al-Taqi)",
    description:
      "Celebration of the birth of the ninth Imam, Muhammad ibn Ali al-Jawad.",
    event_type: "celebration",
    event_date: "10-rajab",
  },
  {
    id: "076",
    title: "Birth of Imam Ali ibn Abi Talib",
    description:
      "Celebration of the birth of the first Imam, Ali ibn Abi Talib, born inside the Holy Kaaba in Mecca.",
    event_type: "celebration",
    event_date: "13-rajab",
  },
  {
    id: "077",
    title: "Death of Zaynab bint Ali (Zaynab al-Kubra)",
    description:
      "Commemoration of the passing of Lady Zaynab bint Ali, heroine of Karbala.",
    event_type: "others",
    event_date: "15-rajab",
  },
  {
    id: "080",
    title: "Martyrdom of Imam Musa al-Kazim",
    description:
      "Commemoration of the martyrdom of the seventh Imam, Musa ibn Ja'far al-Kazim.",
    event_type: "martyrdom",
    event_date: "25-rajab",
  },
  {
    id: "081",
    title: "Mab'ath – Beginning of Prophethood",
    description:
      "Commemoration of the day Prophet Muhammad received the first revelation and was appointed as the Messenger of Allah.",
    event_type: "celebration",
    event_date: "27-rajab",
  },
];

//month 8

const shaban: CalendarEvent[] = [
  {
    id: "082",
    title: "Birth of Imam Husayn ibn Ali",
    description:
      "Celebration of the birth of the third Imam, Husayn ibn Ali, the grandson of the Prophet and the leader of the martyrs of Karbala.",
    event_type: "celebration",
    event_date: "3-shaban",
  },
  {
    id: "083",
    title: "Birth of Abbas ibn Ali",
    description:
      "Celebration of the birth of Abbas ibn Ali, the standard-bearer of Karbala and symbol of loyalty and courage.",
    event_type: "celebration",
    event_date: "4-shaban",
  },
  {
    id: "084",
    title: "Birth of Imam Ali ibn Husayn (Zayn al-Abidin)",
    description:
      "Celebration of the birth of the fourth Imam, Ali ibn Husayn, known as Zayn al-Abidin and author of Sahifa al-Sajjadiyya.",
    event_type: "celebration",
    event_date: "5-shaban",
  },
  {
    id: "085",
    title: "Birth of Ali al-Akbar ibn Husayn",
    description:
      "Celebration of the birth of Ali al-Akbar, son of Imam Husayn, who was martyred in Karbala.",
    event_type: "celebration",
    event_date: "11-shaban",
  },
  {
    id: "086",
    title: "Birth of Imam Muhammad al-Mahdi (Imam al-Zamana)",
    description:
      "Celebration of the birth of the twelfth Imam, Muhammad ibn Hasan al-Mahdi, the awaited savior in Shia belief.",
    event_type: "celebration",
    event_date: "15-shaban",
  },
  {
    id: "087",
    title: "Laylat al-Bara'at (Shab-e-Barat)",
    description:
      "The Night of Emancipation, observed with prayers and supplication; in Shia tradition it coincides with the birth anniversary of Imam al-Mahdi.",
    event_type: "commemoration",
    event_date: "15-shaban",
  },
];
//month 9
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

//month 10
const shawwal: CalendarEvent[] = [
  {
    id: "088",
    title: "Eid al-Fitr",
    description:
      "Celebration marking the end of the blessed month of Ramadan; a day of prayer, charity (Zakat al-Fitr), and gratitude.",
    event_type: "celebration",
    event_date: "1-shawwal",
  },
  {
    id: "089",
    title: "Battle of Hunayn",
    description:
      "Commemoration of the Battle of Hunayn in 8 AH, fought shortly after the conquest of Mecca.",
    event_type: "historical",
    event_date: "10-shawwal",
  },
  {
    id: "090",
    title: "Demolition of Jannat al-Baqi",
    description:
      "Commemoration of the destruction of the graves in Jannat al-Baqi cemetery in Medina in 1344 AH.",
    event_type: "commemoration",
    event_date: "8-shawwal",
  },
  {
    id: "091",
    title: "Martyrdom of Imam Ja'far al-Sadiq",
    description:
      "Commemoration of the martyrdom of the sixth Imam, Ja'far ibn Muhammad al-Sadiq, renowned scholar and teacher of Islamic jurisprudence.",
    event_type: "martyrdom",
    event_date: "25-shawwal",
  },
];

//month 11
const dhulQadah: CalendarEvent[] = [
  {
    id: "092",
    title: "Birth of Lady Fatimah al-Ma'sumah",
    description:
      "Celebration of the birth of Lady Fatimah al-Ma'sumah, daughter of Imam Musa al-Kazim and sister of Imam Ali al-Rida, revered for her knowledge and piety.",
    event_type: "celebration",
    event_date: "1-dhul-qadah",
  },
  {
    id: "093",
    title: "Birth of Imam Ali al-Rida",
    description:
      "Celebration of the birth of the eighth Imam, Ali ibn Musa al-Rida.",
    event_type: "celebration",
    event_date: "11-dhul-qadah",
  },
  {
    id: "094",
    title: "Martyrdom of Imam Muhammad al-Taqi (al-Jawad)",
    description:
      "Commemoration of the martyrdom of the ninth Imam, Muhammad ibn Ali al-Jawad.",
    event_type: "martyrdom",
    event_date: "29-dhul-qadah",
  },
];

//month 12

const dhulHijjah: CalendarEvent[] = [
  {
    id: "095",
    title: "Marriage of Imam Ali and Lady Fatimah",
    description:
      "Celebration of the blessed marriage of Imam Ali ibn Abi Talib and Lady Fatimah al-Zahra, regarded as the ideal Islamic union.",
    event_type: "celebration",
    event_date: "1-dhul-hijjah",
  },
  {
    id: "096",
    title: "Martyrdom of Imam Muhammad al-Baqir",
    description:
      "Commemoration of the martyrdom of the fifth Imam, Muhammad ibn Ali al-Baqir, renowned for spreading Islamic knowledge.",
    event_type: "martyrdom",
    event_date: "7-dhul-hijjah",
  },
  {
    id: "097",
    title: "Day of Tarwiyah",
    description:
      "Commemoration of the day pilgrims begin the rites of Hajj and proceed toward Mina.",
    event_type: "commemoration",
    event_date: "8-dhul-hijjah",
  },
  {
    id: "098",
    title: "Day of Arafah & Martyrdom of Muslim ibn Aqil",
    description:
      "Day of supplication and worship during Hajj; also commemorates the martyrdom of Muslim ibn Aqil, envoy of Imam Husayn, and Hani ibn Urwah.",
    event_type: "commemoration",
    event_date: "9-dhul-hijjah",
  },
  {
    id: "099",
    title: "Eid al-Adha",
    description:
      "Celebration of sacrifice commemorating Prophet Ibrahim’s devotion and willingness to sacrifice for Allah.",
    event_type: "celebration",
    event_date: "10-dhul-hijjah",
  },
  {
    id: "100",
    title: "Eid al-Ghadir",
    description:
      "Celebration of the declaration at Ghadir Khumm where Prophet Muhammad publicly appointed Imam Ali as his successor.",
    event_type: "celebration",
    event_date: "18-dhul-hijjah",
  },
  {
    id: "101",
    title: "Day of Mubahala",
    description:
      "Commemoration of the event of Mubahala between the Prophet and the Christians of Najran, demonstrating the spiritual status of the Ahl al-Bayt.",
    event_type: "historical",
    event_date: "24-dhul-hijjah",
  },
  {
    id: "102",
    title: "Revelation of Surah al-Insan (Hal Ata)",
    description:
      "Commemoration of the revelation honoring the Ahl al-Bayt for their selfless charity to the needy, the orphan, and the captive.",
    event_type: "historical",
    event_date: "25-dhul-hijjah",
  },
];

const events: CalendarEvent[] = [
  ...muharram,
  ...safar,
  ...rabiAlAwwal,
  ...rabiAlThani,
  ...jumadaAlAwwal,
  ...jumadaAlThani,
  ...rajab,
  ...shaban,
  ...ramadan,
  ...shawwal,
  ...dhulQadah,
  ...dhulHijjah,
];

export default events;
