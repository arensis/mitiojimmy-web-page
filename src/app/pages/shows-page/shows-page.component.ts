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
  showsSubscription!: Subscription;
  newLiveEntriesGrouped: any;
  newLiveEntryYears: string[] = []
  olderLiveEntriesGrouped: any;
  olderLiveEntryYears: string[] = []
  newLivesCount!: number;

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

    this.showsSubscription = this.dataService.getShowsData()
      .subscribe(shows => {
        this.newLiveEntriesGrouped = this.showsService.getNewShowsGroupedByYearsAndMonths(shows);
        this.newLiveEntryYears = Object.keys(this.newLiveEntriesGrouped);
        this.olderLiveEntriesGrouped = this.showsService.getOlderShowsGroupedByYearsAndMonths(shows);
        this.olderLiveEntryYears = Object.keys(this.olderLiveEntriesGrouped).sort((a, b) => Number.parseInt(b) - Number.parseInt(a));;
        this.newLivesCount = Object.keys(this.newLiveEntriesGrouped).length;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeLanguageSubscription();

    if (this.showsSubscription) {
      this.showsSubscription.unsubscribe();
    }
  }

  trackFn(index: number, item: any, ) {
    return index;
  }
}
