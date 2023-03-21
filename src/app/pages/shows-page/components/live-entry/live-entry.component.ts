import { GoogleAnalyticsService } from './../../../../services/google-analytics.service';
import { TranslateService } from '@ngx-translate/core';
import { LiveEntry } from '../../../../model/shows/LiveEntry';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-live-entry',
  templateUrl: './live-entry.component.html',
  styleUrls: ['./live-entry.component.scss']
})
export class LiveEntryComponent implements OnInit {
  @Input()
  liveEntry!: LiveEntry;

  guestArtist?: string

  constructor(
    private tranlsate: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.guestArtist = this.liveEntry.guestArtists
      .map(guest => guest.name)
      .join(',');
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  onTicketClick(hall: string, date: Date, onSale: boolean): void {
    this.googleAnalyticsService.buyTicketsButton(hall, date, onSale);
  }
}
