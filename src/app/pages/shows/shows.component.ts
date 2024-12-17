import { TranslateService } from '@ngx-translate/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';
import moment from 'moment';
import { ShowsService } from 'src/app/shared/services/shows.service';
import 'moment/locale/es';
import { LiveEntry } from 'src/app/shared/model/shows/LiveEntry';
import { Time } from '@angular/common';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit, OnDestroy {
  showsSubscription!: Subscription;
  shows!: LiveEntry[];

  constructor(private dataService: DataService, private showsService: ShowsService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.showsSubscription = this.dataService.getShowsData()
      .subscribe(shows => {
        this.shows = shows.sort((a, b) => {
          if (moment(a.date).isAfter(moment(b.date))) {
            return -1;
          }
          if (moment(a.date).isBefore(b.date)) {
            return 1;
          }

          return 0;
        });
      });

  }

  ngOnDestroy(): void {
    if (this.showsSubscription) {
      this.showsSubscription.unsubscribe();
    }
  }

  getMontName(date: Date): string {
    const showDate = moment(date);
    showDate.locale(this.translate.currentLang);
    return moment(showDate).format('MMMM').toUpperCase().slice(0, 3);
  }

  getDayNumber(date: Date): string {
    return this.buildDayNumber(moment(date).date());
  }

  getMinutes(time: Time): string {
    return time.minutes > 9 ? time.minutes.toString() : '0'.concat(time.minutes.toString());
  }

  getYear(date: Date): number {
    return moment(date).year();
  }

  isEvent(liveEntry: LiveEntry): boolean {
    return (liveEntry.nameEvent || '').length > 0
  }

  private buildDayNumber(dayNumber: number): string {
    return dayNumber > 9 ? dayNumber.toString() : '0'.concat(dayNumber.toString());
  }

  showCommingSoonButton(liveEntry: LiveEntry): boolean {
    const isNewShow = moment(liveEntry.date).isAfter(moment());
    return (liveEntry.concertHall.ticketsLink || '').trim() === '' && isNewShow && !liveEntry.freeEntry && !liveEntry.canceled
  }

  showFreeEntryButton(liveEntry: LiveEntry): boolean {
    return liveEntry.freeEntry && !liveEntry.canceled;
  }

  showBuyButton(liveEntry: LiveEntry): boolean {
    return (liveEntry.concertHall.ticketsLink || '').trim() !== '' && !liveEntry.canceled
  }

  showCancelButtonWithLink(liveEntry: LiveEntry): boolean {
    return liveEntry.canceled && (liveEntry.concertHall.ticketsLink || '').trim() !== ''
  }

  trackFn(index: number, item: any) {
    return index;
  }
}
