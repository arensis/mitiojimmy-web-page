import { TranslateService } from '@ngx-translate/core';
import { LiveEntry } from '../../../../model/shows/LiveEntry';
import { Component, Input, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'src/app/shared/services/google-analytics.service';
import { faTwitter, IconDefinition, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faMicrophone, faRss } from '@fortawesome/free-solid-svg-icons';
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
  containsShowChronicle!: boolean;
  liveEntryId: string = '';

  constructor(
    private tranlsate: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  chronicleIcons = [
    {class: "faTwitter", icon: faTwitter},
    {class: "faFacebook", icon: faFacebookSquare},
    {class: "faRadio", icon: faMicrophone},
    {class: "faFeeds", icon: faRss}
  ];

  chronicleStyle: { class: string, icon: any } = this.chronicleIcons[3];

  ngOnInit(): void {
    this.guestArtist = this.liveEntry.guestArtists
      .map(guest => guest.name)
      .join(',');

    this.isNewShow = moment(this.liveEntry.date).isAfter(moment());
    this.containsShowChronicle = this.liveEntry.chronicle !== null;
    this.liveEntryId = this.liveEntry.date.toString().split('/').join('-');
    if (this.liveEntry.chronicle?.platform) {
      this.chronicleStyle = this.chronicleIcons.find(item =>
        item.class.toUpperCase().includes(this.liveEntry.chronicle.platform.toString())) || this.chronicleIcons[3];
    }
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  onTicketClick(hall: string, date: Date, onSale: boolean): void {
    this.googleAnalyticsService.buyTicketsButton(hall, date, onSale);
  }
}
