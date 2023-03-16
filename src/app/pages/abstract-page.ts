import { Directive, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";
import SEOService from "../services/seo.service";

@Directive()
export abstract class AbstractPage {
  languageSubscription!: Subscription;

  constructor(
    private seoService: SEOService,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  updateMetaData(): void {
    const { meta } = this.route.snapshot.data;
    const { link } = this.route.snapshot.data;

    this.seoService.updateTitle(meta.title);
    this.seoService.createCannonicalLink(link.url);

    this.languageSubscription = this.translate.onLangChange.subscribe(() => {
      this.seoService.updateTitle(meta.title);
    });
  }

  unsubscribeLanguageSubscription(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
