import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LiveEntry } from 'src/app/model/shows/LiveEntry';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import SEOService from 'src/app/services/seo.service';

@Component({
  selector: 'app-shows-page',
  templateUrl: './shows-page.component.html',
  styleUrls: ['./shows-page.component.scss']
})
export class ShowsPageComponent implements OnInit, OnDestroy {
  liveEntrySubscription?: Subscription;
  liveEntries: LiveEntry[] = [];

  constructor(
    private dataService: DataService,
    private seoService: SEOService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.updateMetaData();
    this.liveEntrySubscription = this.dataService.getShowsData()
      .subscribe(shows => this.liveEntries = shows);
  }

  ngOnDestroy(): void {
    if (this.liveEntrySubscription) {
      this.liveEntrySubscription.unsubscribe();
    }
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  updateMetaData() {
    const { meta } = this.route.snapshot.data;
    const { link } = this.route.snapshot.data;

    this.seoService.updateTitle(meta.title);
    this.seoService.createCannonicalLink(link.url);
  }
}
