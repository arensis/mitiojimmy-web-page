import { Component, OnInit } from '@angular/core';
import { faTwitter, faBandcamp, faFacebook, faSpotify, faInstagram, faYoutube, faItunes, faTiktok, faDeezer, faVimeo, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { GoogleAnalyticsService } from 'src/app/shared/services/google-analytics.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  workinSocialNetworks!: any[];

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  socialNetworks = [
    {class: 'faSpotify', icon: faSpotify, link: 'https://open.spotify.com/artist/32WVgopB3xieUzzjOfOS85?si=z9hh-GyaShisFwkLp1SBXg'},
    {class: 'faBandcamp', icon: faBandcamp, link: 'https://mitiojimmy.bandcamp.com/'},
    {class: 'faYoutube', icon: faYoutube, link: 'https://www.youtube.com/@mitiojimmy'},
    {class: 'faFacebook', icon: faFacebook, link: 'https://www.facebook.com/mitiojimmy'},
    {class: 'faTwitter', icon: faTwitter, link: 'https://twitter.com/mitiojimmy'},
    {class: 'faSoundcloud', icon: faSoundcloud, link: 'https://soundcloud.com/mitiojimmy' },
    {class: 'faInstagram', icon: faInstagram, link: 'https://www.instagram.com/mitiojimmy/'},
    {class: 'faItunes', icon: faItunes, link: ''},
    {class: 'faDeezer', icon: faDeezer, link: ''},
    {class: 'faVimeo', icon: faVimeo, link: ''},
    {class: 'faTiktok', icon: faTiktok, link: 'https://www.tiktok.com/@mitiojimmy'},
  ];

  ngOnInit(): void {
    this.workinSocialNetworks = this.socialNetworks.filter(socialNetwork => {
      return this.isNotEmptyStringOrNull(socialNetwork.link);
    });
  }

  private isNotEmptyStringOrNull(text: string): boolean {
    return (text || '' ).length > 0;
  }

  onSocialNetworkClick(socialNetworkName: string): void {
    this.googleAnalyticsService.socialNetworkClicked(socialNetworkName);
  }
}
