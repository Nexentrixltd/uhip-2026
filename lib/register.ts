export type Ticket = {
  id: string;
  name: string;
  date: string;
  note: string;
  description: string;
  price: number | null;
};

export const TICKETS: Ticket[] = [
  {
    id: "pch",
    name: "PCH Halal Training",
    date: "26 November 2026",
    note: "Seats: to be confirmed",
    description:
      "Public Class Halal: open, intensive two-day training. Max 100 participants.",
    price: null,
  },
  {
    id: "his",
    name: "Halal Investment Summit",
    date: "26 November 2026",
    note: "Seats: to be confirmed",
    description:
      "Deal rooms, B2B/B2G meetings and Shariah-compliant financing.",
    price: null,
  },
  {
    id: "ihf",
    name: "Int’l Halalpreneurship Forum",
    date: "26 November 2026",
    note: "Seats: to be confirmed",
    description: "Plenaries, policy roundtables, mentorship and networking.",
    price: null,
  },
  {
    id: "exhibition",
    name: "Halal Economy Exhibition",
    date: "26 November 2026",
    note: "Exhibitor pricing: to be confirmed",
    description:
      "Exhibitor packages: Market, Solutions, Innovation and Institutions zones.",
    price: null,
  },
];

export const MAX_QUANTITY = 10;

export const formatNaira = (amount: number | null) =>
  amount === null ? "₦ TBC" : `₦${amount.toLocaleString("en-US")}`;
