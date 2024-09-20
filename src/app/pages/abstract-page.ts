import { Directive } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";
import SEOService from "../shared/services/seo.service";
import { LocaleSpecifier } from "moment";
import moment from "moment";
import 'moment/locale/es';

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

  translateMonth(month: number): string {
    const lang = this.translate.currentLang;

    return moment().locale(lang as LocaleSpecifier)
      .month(month).format('MMMM').toUpperCase();
  }
}
