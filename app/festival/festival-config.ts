export const FESTIVAL = {
  name: "21st Annual St. Peter's Lebanese Festival",
  shortName: "Lebanese Festival",
  tagline: "Rooted in Lebanon, Rising in Canada",
  dateRange: "June 26 – 28, 2026",
  schedule: [
    { day: "Friday", date: "June 26, 2026", hours: "11:00 AM – 11:00 PM" },
    { day: "Saturday", date: "June 27, 2026", hours: "11:00 AM – 11:00 PM" },
    { day: "Sunday", date: "June 28, 2026", hours: "11:00 AM – 10:00 PM" },
  ],
  address: "166 Tecumseh Rd W, Windsor, ON N8X 1E9",
  phoneDisplay: "(519) 973-7240",
  phoneTel: "+15199737240",
  highlights: [
    "Lebanese Food",
    "Live Music",
    "Folk Dance",
    "Kids Fun Games",
    "Raffle Prizes",
    "Drinks & More",
  ],
  posterSrc: "/assets/images/festival-2026.png",
  posterWidth: 800,
  posterHeight: 1600,
  endIso: "2026-06-29T00:00:00-04:00",
} as const;

export function isFestivalActive(now: Date = new Date()): boolean {
  return now.getTime() < new Date(FESTIVAL.endIso).getTime();
}
