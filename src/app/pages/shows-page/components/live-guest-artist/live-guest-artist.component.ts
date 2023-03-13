import { GuestArtist } from './../../../../model/shows/GuestArtist';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-live-guest-artist',
  templateUrl: './live-guest-artist.component.html',
  styleUrls: ['./live-guest-artist.component.scss']
})
export class LiveGuestArtistComponent {
  @Input()
  guestArtists: GuestArtist[] = [];

  trackByFn(index: number, item: any): number {
    return index;
  }
}
