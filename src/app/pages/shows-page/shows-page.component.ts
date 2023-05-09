import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LiveEntry } from 'src/app/model/shows/LiveEntry';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AbstractPage } from '../abstract-page';
import { DataService } from 'src/app/shared/services/data.service';
import SEOService from 'src/app/shared/services/seo.service';
import { ShowsService } from 'src/app/shared/services/shows.service';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss']
})
export class ShowsPageComponent extends AbstractPage implements OnInit, OnDestroy {
  liveEntrySubscription?: Subscription;
  liveEntries: LiveEntry[] = [];

  showsSubscription!: Subscription;
  liveEntriesGrouped: any;
  liveEntryYears: string[] = []

  constructor(
    private dataService: DataService,
    private showsService: ShowsService,
    seoService: SEOService,
    route: ActivatedRoute,
    translate: TranslateService,

  ) {
    super(seoService, route, translate);
  }

  ngOnInit(): void {
    this.updateMetaData();
    this.liveEntrySubscription = this.dataService.getShowsData()
      .subscribe(shows => this.liveEntries = shows);

    this.showsSubscription = this.dataService.getShowsData()
      .subscribe(shows => {
        this.liveEntriesGrouped = this.showsService.groupByYearsAndMonths(shows);
        this.liveEntryYears = Object.keys(this.liveEntriesGrouped);
        console.log(this.liveEntriesGrouped);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeLanguageSubscription();
    if (this.liveEntrySubscription) {
      this.liveEntrySubscription.unsubscribe();
    }

    if (this.showsSubscription) {
      this.showsSubscription.unsubscribe();
    }
  }

  trackFn(index: number, item: any, ) {
    return index;
  }
}
