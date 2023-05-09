import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable()
export default class SEOService {
  canonicalUrlBase: string = 'https://mitiojimmy.com/';

  constructor(
    @Inject(DOCUMENT) private dom: Document,
    private titleSvc: Title,
    private translate: TranslateService
  ) {}

  updateTitle(title: string) {
    const translatedTitle = this.translateTitle(title);
    this.titleSvc.setTitle(translatedTitle);
  }

  private translateTitle(title: string) {
    if (title === 'home-title') {
      return this.translate.instant('sections.' + title);
    }

    return 'Mi tío Jimmy - ' + this.translate.instant('sections.' + title);
  }

  createCannonicalLink(url: string) {
    let fullUrl: string = this.canonicalUrlBase.concat(url);
    let link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', fullUrl);
    this.dom.head.appendChild(link);
  }
}
