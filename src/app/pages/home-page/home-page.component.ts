import { Component, OnInit } from '@angular/core';
import { faCoffee,  } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faBandcamp, faFacebook, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ActivatedRoute } from '@angular/router';
import SEOService from 'src/app/services/seo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  faCoffee = faCoffee;

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
