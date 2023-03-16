import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SEOService from 'src/app/services/seo.service';
import { AbstractPage } from '../abstract-page';

@Component({
  selector: 'app-bio-page',
  templateUrl: './bio-page.component.html',
  styleUrls: ['./bio-page.component.scss']
})
export class BioPageComponent extends AbstractPage implements OnInit, OnDestroy {
  constructor(
    seoService: SEOService,
    route: ActivatedRoute,
    translate: TranslateService
  ) {
    super(seoService, route, translate);
  }

  ngOnInit(): void {
    this.updateMetaData();
  }

  ngOnDestroy(): void {
    this.unsubscribeLanguageSubscription();
  }
}
