import { BandVideos } from './../../model/videos/BandVideos';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AbstractPage } from '../abstract-page';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from 'src/app/shared/services/data.service';
import SEOService from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})
export class VideosPageComponent extends AbstractPage implements OnInit, OnDestroy {
  bandVideosSubscription?: Subscription;
  bands: BandVideos[] = [];

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
    this.bandVideosSubscription = this.dataService.getVideosData()
      .subscribe(bands => this.bands = bands);
  }

  ngOnDestroy(): void {
    this.unsubscribeLanguageSubscription();
    if (this.bandVideosSubscription) {
      this.bandVideosSubscription.unsubscribe();
    }
  }

  trackFn(index: number, item: any) {
    return index;
  }
}
