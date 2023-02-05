import { Component, OnInit } from '@angular/core';
import { faTwitter, faBandcamp, faFacebook, faSpotify, faInstagram, faYoutube, faItunes, faTiktok, faDeezer, faVimeo } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  workinSocialNetworks!: any[];

  socialNetworks = [
    {icon: faSpotify, link: ''},
    {icon: faBandcamp, link: 'https://mitiojimmy.bandcamp.com/'},
    {icon: faItunes, link: ''},
    {icon: faDeezer, link: ''},
    {icon: faYoutube, link: 'https://youtube.com/channel/UCT5HFyG_6d5ysJBgxWpcgzg'},
    {icon: faVimeo, link: ''},
    {icon: faInstagram, link: 'https://www.instagram.com/mitiojimmy/'},
    {icon: faTiktok, link: ''},
    {icon: faFacebook, link: ''},
    {icon: faTwitter, link: 'https://twitter.com/mitiojimmy'}
  ];

  ngOnInit(): void {
    this.workinSocialNetworks = this.socialNetworks.filter(socialNetwork => {
      return this.isNotEmptyStringOrNull(socialNetwork.link);
    });
  }

  private isNotEmptyStringOrNull(text: string): boolean {
    return (text || '' ).length > 0;
  }
}
