import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import SEOService from 'src/app/services/seo.service';
import { AbstractPage } from '../abstract-page';

@Component({
  selector: 'app-legal-advisories-page',
  templateUrl: './legal-advisories-page.component.html',
  styleUrls: ['./legal-advisories-page.component.scss']
})
export class LegalAdvisoriesPageComponent extends AbstractPage implements OnInit, OnDestroy {

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
