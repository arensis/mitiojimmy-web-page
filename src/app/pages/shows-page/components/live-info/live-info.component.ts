import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LiveEntry } from 'src/app/model/shows/LiveEntry';
import { GoogleAnalyticsService } from 'src/app/shared/services/google-analytics.service';

@Component({
  selector: 'app-live-info',
  templateUrl: './live-info.component.html',
  styleUrls: ['./live-info.component.scss']
})
export class LiveInfoComponent implements OnInit {
  @Input()
  liveEntry!: LiveEntry;

  minutes: string = '';

  constructor(
    private tranlsate: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.minutes = this.liveEntry.time.minutes > 9 ? this.liveEntry.time.minutes.toString() : '0'.concat(this.liveEntry.time.minutes.toString());
  }

  onLocationClick(hall: string, date: Date) {
    this.googleAnalyticsService.liveEntryLocationClicked(hall, date);
  }

  onConcertHallClick(hall: string, date: Date) {
    this.googleAnalyticsService.liveEntryConcertHallClick(hall, date);
  }


}
