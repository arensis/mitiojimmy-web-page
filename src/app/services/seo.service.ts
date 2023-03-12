import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export default class SEOService {
  canonicalUrlBase: string = 'https://mitiojimmy.com/';

  constructor(
    @Inject(DOCUMENT) private dom: Document,
    private titleSvc: Title
  ) {}

  updateTitle(title: string) {
    this.titleSvc.setTitle(title);
  }

  createCannonicalLink(url: string) {
    let fullUrl: string = this.canonicalUrlBase.concat(url);
    let link: HTMLLinkElement = this.dom.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', fullUrl);
    this.dom.head.appendChild(link);
  }
}
