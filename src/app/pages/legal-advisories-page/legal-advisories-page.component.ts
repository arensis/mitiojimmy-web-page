import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SEOService from 'src/app/services/seo.service';

@Component({
  selector: 'app-legal-advisories-page',
  templateUrl: './legal-advisories-page.component.html',
  styleUrls: ['./legal-advisories-page.component.scss']
})
export class LegalAdvisoriesPageComponent implements OnInit {

  constructor(
    private seoService: SEOService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const { meta } = this.route.snapshot.data;
    const { link } = this.route.snapshot.data;

    this.seoService.updateTitle(meta.title);
    this.seoService.createCannonicalLink(link.url);
  }

}
