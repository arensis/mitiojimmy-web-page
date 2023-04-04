import { TranslateService } from '@ngx-translate/core';
import { ShowsService } from './../../../../shared/services/shows.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LiveEntry } from 'src/app/shared/model/shows/LiveEntry';
import { DataService } from 'src/app/shared/services/data.service';
import moment, { LocaleSpecifier } from 'moment';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit, OnDestroy {
  showsSubscription!: Subscription;
  liveEntriesGrouped: any;
  liveEntryYears: string[] = []

  constructor(private dataService: DataService, private showsService: ShowsService, private translate: TranslateService) {}

  ngOnInit(): void {
    this.showsSubscription = this.dataService.getShowsData()
      .subscribe(shows => {
        this.liveEntriesGrouped = this.showsService.groupByYearsAndMonths(shows);
        this.liveEntryYears = Object.keys(this.liveEntriesGrouped);
        console.log(this.liveEntriesGrouped);
      });

  }

  ngOnDestroy(): void {
    if (this.showsSubscription) {
      this.showsSubscription.unsubscribe();
    }
  }

  translateMonth(month: number): string {
    const lang = this.translate.currentLang;

    return moment().locale(lang as LocaleSpecifier)
      .month(month).format('MMMM').toUpperCase();
  }

  trackFn(index: number, item: any, ) {
    return index;
  }
}
