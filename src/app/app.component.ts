import { Component } from '@angular/core';
import { faTwitter, faBandcamp, faFacebook, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { TranslateService } from '@ngx-translate/core';
import { I18nService } from './shared/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  constructor(private i18nService: I18nService, private translate: TranslateService) {
    this.i18nService.init('es', ['es', 'en']);
  }
}
