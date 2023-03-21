import { GuestArtist } from './../../../../model/shows/GuestArtist';
import { Component, Input } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'app-live-guest-artist',
  templateUrl: './live-guest-artist.component.html',
  styleUrls: ['./live-guest-artist.component.scss']
})
export class LiveGuestArtistComponent {
  @Input()
  guestArtists: GuestArtist[] = [];
  @Input()
  liveEntryDate!: Date;
  @Input()
  concertHallName!: string;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  trackByFn(index: number, item: any): number {
    return index;
  }

  onGuestClick(guestArtistName: string) {
    this.googleAnalyticsService.liveEntryGuestArtistClicked(this.concertHallName, this.liveEntryDate, guestArtistName);
  }
}
