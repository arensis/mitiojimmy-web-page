import { Component } from '@angular/core';
import { faTwitter, faBandcamp, faFacebook, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss']
})
export class PublicLayoutComponent {
  title = 'Mi tío Jimmy';
  twitterIcon = faTwitter;
  bandCampIcon = faBandcamp;
  facebookIcon = faFacebook;
  spotifyIcon = faSpotify;
  instagramIcon = faInstagram;
  closeIcon = faXmark;

  sections = [
    {name: 'sections.home', url: '/'},
    {name: 'sections.bio', url: 'bio'},
    {name: 'sections.shows', url: 'shows'},
    {name: 'sections.discography', url: 'discography'},
    {name: 'sections.videos', url: 'videos'},
    {name: 'sections.contact', url: 'contact'}
  ];
}
