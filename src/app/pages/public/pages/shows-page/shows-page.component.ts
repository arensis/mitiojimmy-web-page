import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LiveEntry } from 'src/app/shared/model/shows/LiveEntry';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import SEOService from 'src/app/shared/services/seo.service';
import { AbstractPage } from '../abstract-page';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss']
})
export class ShowsPageComponent extends AbstractPage implements OnInit, OnDestroy {
  liveEntrySubscription?: Subscription;
  liveEntries: LiveEntry[] = [];

  constructor(
    private dataService: DataService,
    seoService: SEOService,
    route: ActivatedRoute,
    translate: TranslateService
  ) {
    super(seoService, route, translate);
  }

  ngOnInit(): void {
    this.updateMetaData();
    this.liveEntrySubscription = this.dataService.getShowsData()
      .subscribe(shows => this.liveEntries = shows);
  }

  ngOnDestroy(): void {
    this.unsubscribeLanguageSubscription();
    if (this.liveEntrySubscription) {
      this.liveEntrySubscription.unsubscribe();
    }
  }

  trackByFn(index: number, item: any): number {
    return index;
  }
}
