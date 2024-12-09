import { GoogleAnalyticsService } from 'src/app/shared/services/google-analytics.service';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LiveEntry } from 'src/app/shared/model/shows/LiveEntry';
import { ActivatedRoute } from '@angular/router';

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
    private translate: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.minutes = this.liveEntry.time.minutes > 9 ? this.liveEntry.time.minutes.toString() : '0'.concat(this.liveEntry.time.minutes.toString());
  }

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
