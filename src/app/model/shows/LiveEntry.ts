import { Time } from "@angular/common";
import { ConcertHall } from "./ConcertHall";
import { GuestArtist } from "./GuestArtist";

export interface LiveEntry {
  date: Date;
  time: Time;
  city: string;
  province: string;
  concertHall: ConcertHall;
  guestArtists: GuestArtist[];
}
