import { Component, Input } from '@angular/core';
import { GuestArtist } from 'src/app/shared/model/shows/GuestArtist';
import { GoogleAnalyticsService } from 'src/app/shared/services/google-analytics.service';

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
