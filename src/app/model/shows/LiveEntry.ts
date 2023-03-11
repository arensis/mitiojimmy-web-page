import { Time } from "@angular/common";
import { TicketLink } from "./TicketLink";

export interface LiveEntry {
  date: Date;
  time: Time;
  city: string;
  province: string;
  concertHall: string;
  ticketsLink: string;
}
