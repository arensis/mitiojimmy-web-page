import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AlbumPlayer } from '../album-player';

@Component({
  selector: 'app-spotify-artist-player',
  templateUrl: './spotify-artist-player.component.html',
  styleUrls: ['../album-player.scss']
})
export class SpotifyArtistPlayerComponent extends AlbumPlayer {
  constructor(sanitizer: DomSanitizer) {
    super(sanitizer);
  }

  buildBasePlayerUrl(albumId: string): string {
    return 'https://open.spotify.com/embed/artist/'.concat(albumId)
      .concat('?utm_source=generator&theme=0');
  }
}
