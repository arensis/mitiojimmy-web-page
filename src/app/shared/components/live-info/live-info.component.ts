import { GoogleAnalyticsService } from 'src/app/shared/services/google-analytics.service';
import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LiveEntry } from 'src/app/shared/model/shows/LiveEntry';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-live-info',
  templateUrl: './live-info.component.html',
  styleUrls: ['./live-info.component.scss']
})
export class LiveInfoComponent {
  @Input()
  liveEntry!: LiveEntry;

  constructor(
    private translate: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private route: ActivatedRoute,
  ) {}

  onLocationClick(hall: string, date: Date) {
    console.log('location click url', this.route.parent?.url);
    if (!(this.route.parent?.url || '').toString().includes('backoffice')) {
      this.googleAnalyticsService.liveEntryLocationClicked(hall, date);
    }

  }

  onConcertHallClick(hall: string, date: Date) {
    console.log('concertHall click url', this.route.parent?.url);
    this.googleAnalyticsService.liveEntryConcertHallClick(hall, date);
  }


}
