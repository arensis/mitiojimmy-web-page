import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { AlbumPlayer } from '../album-player/album-player';

@Component({
  selector: 'app-spotify-album-player',
  templateUrl: './spotify-album-player.component.html',
  styleUrls: ['../album-player/album-player.scss']
})
export class SpotifyAlbumPlayerComponent  extends AlbumPlayer {
  constructor(sanitizer: DomSanitizer, translate: TranslateService) {
    super(sanitizer, translate);
  }

  buildBasePlayerUrl(albumId: string): string {
    return 'https://open.spotify.com/embed/album/'.concat(albumId)
      .concat('?utm_source=generator&theme=0');
  }


}
