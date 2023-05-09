import { Component, OnInit, OnDestroy } from '@angular/core';
import { faCoffee,  } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faBandcamp, faFacebook, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AbstractPage } from '../abstract-page';
import SEOService from 'src/app/shared/services/seo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends AbstractPage implements OnInit, OnDestroy {
  faCoffee = faCoffee;

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
