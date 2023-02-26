import { Component } from '@angular/core';
import { faTwitter, faBandcamp, faFacebook, faSpotify, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons'

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
    {name: 'Home', url: '/'},
    {name: 'Biografía', url: 'bio'},
    {name: 'Conciertos', url: 'shows'},
    {name: 'Música', url: 'music'},
    {name: 'Contacto', url: 'contact'}
  ]
}
