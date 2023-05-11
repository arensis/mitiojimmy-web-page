import { TranslateService } from '@ngx-translate/core';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AlbumPlayer } from '../album-player/album-player';

@Component({
  selector: 'app-bandcamp-album-player',
  templateUrl: './bandcamp-album-player.component.html',
  styleUrls: ['../album-player/album-player.scss']
})
export class BandcampAlbumPlayerComponent extends AlbumPlayer {
  constructor(sanitizer: DomSanitizer, translate: TranslateService) {
    super(sanitizer, translate);
  }

  buildBasePlayerUrl(albumId: string, isTrack: boolean): string {
      return 'https://bandcamp.com/EmbeddedPlayer/'
        .concat(isTrack ? 'track=' : 'album=')
        .concat(albumId)
        .concat('/size=large/bgcol=333333/linkcol=FE4C72/artwork=small/transparent=true/');
  }
}
