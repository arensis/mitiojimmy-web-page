import { Injectable } from '@angular/core';
declare let gtag:Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  buyTicketsButton(hall: string, date: Date, onSale: boolean): void {
    this.liveEntryClick(hall, date, onSale ? 'enabledSales' : 'disabledSales');
  }

  liveEntryLocationClicked(hall: string, date: Date): void {
    this.liveEntryClick(hall, date, 'location');
  }

  liveEntryConcertHallClick(hall: string, date: Date): void {
    this.liveEntryClick(hall, date, 'concertHall');
  }

  liveEntryGuestArtistClicked(hall: string, date: Date, guestArtistName: string): void {
    this.liveEntryClick(hall, date, guestArtistName);
  }

  socialNetworkClicked(socialNetworkName: string): void {
    this.linkClicked(socialNetworkName);
  }

  contactMailClicked(): void {
    this.linkClicked('contactMail');
  }

  private liveEntryClick(hall: string, date: Date, eventSuffix: string) {
    const eventName: string = hall.concat(date.toString());

    this.eventEmitter(eventName.concat('-'+eventSuffix), 'liveEntry', 'click');
  }

  private linkClicked(linkName: string): void {
    this.eventEmitter(linkName, 'link', 'click');
  }

  private eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel?: string,
    eventValue?: number) {
      const eventLabelTransformed = eventLabel ? eventAction : null;
      const eventValueTransformed = eventValue ? eventValue : null;

        //  gtag('event', eventName, {
        //          eventCategory: eventCategory,
        //          eventLabel: eventLabelTransformed,
        //          eventAction: eventAction,
        //          eventValue: eventValueTransformed
        //        })
    }
}
