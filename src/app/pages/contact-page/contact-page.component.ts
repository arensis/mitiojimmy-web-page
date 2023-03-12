import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SEOService from 'src/app/services/seo.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  mailIcon = faEnvelope;

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
