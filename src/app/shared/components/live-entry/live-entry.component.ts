import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';
import { LiveEntry } from 'src/app/shared/model/shows/LiveEntry';
import { GoogleAnalyticsService } from 'src/app/shared/services/google-analytics.service';

@Component({
  selector: 'app-live-entry',
  templateUrl: './live-entry.component.html',
  styleUrls: ['./live-entry.component.scss']
})
export class LiveEntryComponent implements OnInit {
  @Input()
  liveEntry!: LiveEntry;
  @Input()
  showBackofficeActions?: boolean = false;

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
