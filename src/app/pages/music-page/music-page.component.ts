import { TranslateService } from '@ngx-translate/core';
import { DataService } from './../../services/data.service';
import { BandDiscography } from '../../model/discography/BandDiscography';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { StreamingServiceType } from 'src/app/model/discography/StreamingServiceType';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import SEOService from 'src/app/services/seo.service';
import { AbstractPage } from '../abstract-page';

@Component({
  selector: 'app-music-page',
  templateUrl: './music-page.component.html',
  styleUrls: ['./music-page.component.scss']
})
export class MusicPageComponent extends AbstractPage implements OnInit, OnDestroy {

  musicNote = faMusic;

  bandsSubscription?: Subscription;

  bands: BandDiscography[] = [];

  constructor(
    private dataService: DataService,
    seoService: SEOService,
    route: ActivatedRoute,
    translate: TranslateService
  ) {
    super(seoService, route, translate);
  }

  ngOnInit() {
    this.updateMetaData();
    this.bandsSubscription = this.dataService.getDiscographyData()
      .subscribe(discography => this.bands = discography);
  }

  ngOnDestroy(): void {
    this.unsubscribeLanguageSubscription();
    if (this.bandsSubscription) {
      this.bandsSubscription.unsubscribe();
    }
  }

  trackFn(index: number, item: any) {
    return index;
  }
}
