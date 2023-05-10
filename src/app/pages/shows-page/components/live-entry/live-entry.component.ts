import { TranslateService } from '@ngx-translate/core';
import { LiveEntry } from '../../../../model/shows/LiveEntry';
import { Component, Input, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/shared/services/google-analytics.service';
import { Moment } from 'moment';
import moment from 'moment';

@Component({
  selector: 'app-live-entry',
  templateUrl: './live-entry.component.html',
  styleUrls: ['./live-entry.component.scss']
})
export class LiveEntryComponent implements OnInit {
  @Input()
  liveEntry!: LiveEntry;

  guestArtist?: string
  isNewShow!: boolean;
  containsShowChronicle: boolean = true;
  liveEntryId: string = '';

  constructor(
    private tranlsate: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.guestArtist = this.liveEntry.guestArtists
      .map(guest => guest.name)
      .join(',');

    this.isNewShow = moment(this.liveEntry.date).isAfter(moment());
    this.liveEntryId = this.liveEntry.date.toString().split('/').join('-');
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  onTicketClick(hall: string, date: Date, onSale: boolean): void {
    this.googleAnalyticsService.buyTicketsButton(hall, date, onSale);
  }
}
