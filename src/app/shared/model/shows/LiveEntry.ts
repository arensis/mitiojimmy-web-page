import { Time } from "@angular/common";
import { ConcertHall } from "./ConcertHall";
import { GuestArtist } from "./GuestArtist";
import { Chronicle } from "./chronicle/Chronicle";

export interface LiveEntry {
  date: Date;
  time: Time;
  city: string;
  province: string;
  concertHall: ConcertHall;
  chronicle: Chronicle;
  guestArtists: GuestArtist[];
  nameEvent: string;
  freeEntry: boolean;
  canceled: boolean;
}
