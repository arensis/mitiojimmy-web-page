import { DataService } from 'src/app/shared/services/data.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { LiveEntry } from 'src/app/model/shows/LiveEntry';
import moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import 'moment/locale/es';

@Component({
  selector: 'app-nearest-show',
  templateUrl: './nearest-show.component.html',
  styleUrls: ['./nearest-show.component.scss']
})
export class NearestShowComponent implements OnInit, OnDestroy {
  existsNewShow: boolean = false;
  liveEntry!: LiveEntry;
  dayNumber!: string;
  monthName!: string;
  minutes!: string;
  isEvent!: boolean;

  languageSubscription!: Subscription;

  constructor(
    private dataService: DataService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.initData(this.translate.currentLang);

    this.languageSubscription = this.translate.onLangChange.subscribe(language => {
      if (this.existsNewShow) {
        this.updateDateTranslations(language.lang);
      } else {
        this.initData(language.lang);
      }
    });
  }

  ngOnDestroy(): void {
    if(this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  private initData(language: string): void {
    this.dataService.getShowsData().subscribe((shows: LiveEntry[]) => {
      shows.sort((a, b) => {
        if (moment(a.date).isAfter(moment(b.date))) {
          return -1
        }
        if (moment(a.date).isBefore(moment(b.date))) {
          return 1
        }

        return 0
      });

      const latestShow = shows[0];

      if (moment(latestShow.date).add(1, 'days').isAfter(moment())) {
        this.existsNewShow = true;
        this.liveEntry = latestShow;
        this.isEvent = (this.liveEntry.nameEvent || '').length > 0;
        this.minutes = this.liveEntry.time.minutes > 9 ? this.liveEntry.time.minutes.toString() : '0'.concat(this.liveEntry.time.minutes.toString());
        const latestShowDate = moment(latestShow.date);
        latestShowDate.locale(language);
        this.dayNumber = this.buildDayNumber(moment(latestShow.date).date());
        this.monthName = moment(latestShow.date).format('MMMM').toUpperCase().slice(0, 3);
      }
    });
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
