import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LiveEntry } from 'src/app/model/shows/LiveEntry';
import { GoogleAnalyticsService } from 'src/app/shared/services/google-analytics.service';

@Component({
  selector: 'app-live-info',
  templateUrl: './live-info.component.html',
  styleUrls: ['./live-info.component.scss']
})
export class LiveInfoComponent {
  @Input()
  liveEntry!: LiveEntry;

  constructor(
    private tranlsate: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  onLocationClick(hall: string, date: Date) {
    this.googleAnalyticsService.liveEntryLocationClicked(hall, date);
  }

  onConcertHallClick(hall: string, date: Date) {
    this.googleAnalyticsService.liveEntryConcertHallClick(hall, date);
  }


}
