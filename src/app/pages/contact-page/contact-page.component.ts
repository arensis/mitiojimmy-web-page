import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';
import SEOService from 'src/app/services/seo.service';
import { AbstractPage } from '../abstract-page';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent extends AbstractPage implements OnInit, OnDestroy {
  mailIcon = faEnvelope;

  constructor(seoService: SEOService,
    route: ActivatedRoute,
    translate: TranslateService,
    private googleAnalyticsService: GoogleAnalyticsService) {
    super(seoService, route, translate);
  }

  ngOnInit(): void {
    this.updateMetaData();
  }

  ngOnDestroy(): void {
    this.unsubscribeLanguageSubscription();
  }

  onMailClick(): void {
    this.googleAnalyticsService.contactMailClicked();
  }
}
