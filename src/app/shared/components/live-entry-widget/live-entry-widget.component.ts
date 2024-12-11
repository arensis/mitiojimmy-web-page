import { Component, Input, OnInit } from '@angular/core';
import moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { LiveEntry } from 'src/app/model/shows/LiveEntry';

@Component({
  selector: 'app-live-entry-widget',
  templateUrl: './live-entry-widget.component.html',
  styleUrls: ['./live-entry-widget.component.scss']
})
export class LiveEntryWidgetComponent implements OnInit {
  @Input()
  liveEntry!: LiveEntry;

  dayNumber!: string;
  monthName!: string;
  minutes!: string;
  isEvent!: boolean;

  languageSubscription!: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.initData();

    this.languageSubscription = this.translate.onLangChange.subscribe(language => {
      this.updateDateTranslations(language.lang);
    });
  }

  private initData(): void {
    this.isEvent = (this.liveEntry.nameEvent || '').length > 0;
    this.minutes = this.liveEntry.time.minutes > 9 ? this.liveEntry.time.minutes.toString() : '0'.concat(this.liveEntry.time.minutes.toString());
    const latestShowDate = moment(this.liveEntry.date);
    latestShowDate.locale(this.translate.currentLang);
    this.dayNumber = this.buildDayNumber(moment(this.liveEntry.date).date());
    this.monthName = moment(latestShowDate).format('MMMM').toUpperCase().slice(0, 3);
  }

  private buildDayNumber(dayNumber: number): string {
    return dayNumber > 9 ? dayNumber.toString() : '0'.concat(dayNumber.toString());
  }

  private updateDateTranslations(lang: string): void {
    const liveEntryDate = moment(this.liveEntry.date);
    liveEntryDate.locale(lang);
    this.monthName = moment(liveEntryDate).format('MMMM').toUpperCase().slice(0, 3);
  }
}
