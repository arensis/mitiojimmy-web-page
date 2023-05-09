import { Component, OnInit } from '@angular/core';
import { faTwitter, faBandcamp, faFacebook, faSpotify, faInstagram, faYoutube, faItunes, faTiktok, faDeezer, faVimeo } from '@fortawesome/free-brands-svg-icons';
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
    {class: 'faSpotify', icon: faSpotify, link: ''},
    {class: 'faBandcamp', icon: faBandcamp, link: 'https://mitiojimmy.bandcamp.com/'},
    {class: 'faItunes', icon: faItunes, link: ''},
    {class: 'faDeezer', icon: faDeezer, link: ''},
    {class: 'faYoutube', icon: faYoutube, link: 'https://youtube.com/channel/UCT5HFyG_6d5ysJBgxWpcgzg'},
    {class: 'faVimeo', icon: faVimeo, link: ''},
    {class: 'faInstagram', icon: faInstagram, link: 'https://www.instagram.com/mitiojimmy/'},
    {class: 'faTiktok', icon: faTiktok, link: ''},
    {class: 'faFacebook', icon: faFacebook, link: ''},
    {class: 'faTwitter', icon: faTwitter, link: 'https://twitter.com/mitiojimmy'}
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
