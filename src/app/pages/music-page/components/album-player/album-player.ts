import { TranslateService } from '@ngx-translate/core';
import { Directive, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import moment, { Moment } from "moment";
import 'moment/locale/es';
import { Album } from "src/app/model/discography/Album";
import { Subscription } from 'rxjs';

@Directive()
export abstract class AlbumPlayer implements OnInit {
  @Input()
  album?: Album;

  safeAlbumPlayerUrl?: SafeUrl;
  saveAlbumImageUrl?: SafeUrl;
  coverImageAltText?: string;
  img = '';
  bandCampLink = '';

  monthName!: string;
  year!: string;
  languageSubscription!: Subscription;

  constructor(protected sanitizer: DomSanitizer, private translate: TranslateService) {}

  ngOnInit(): void {
    if (this.album) {
      switch(this.album?.albumName) {
        case 'Los Elegidos': {
          this.img = 'assets/images/temp/bandcamp-loselegidos.png';
          this.bandCampLink = 'https://mitiojimmy.bandcamp.com/track/los-elegidos'
          break;
        }
        case "Dragon's son": {
          this.img = 'assets/images/temp/spotify-dragons-son.png';
          break;
        }
        case 'Planteamiento matemático': {
          this.img = 'assets/images/temp/spotify-planteamiento-matematico.png';
          break;
        }
        case 'El fin es gradual': {
          this.img = 'assets/images/temp/spotify-elfinesgradual.png';
          break;
        }
      }

      this.saveAlbumImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.album.imageUrl);
      this.safeAlbumPlayerUrl = this.buildPlayerUrl(this.album.id, this.album.isTrack);
      this.coverImageAltText = ['Portada de álbum', this.album.albumName].join(': ');

      const date = moment(this.album.releaseDate);
      this.updateDateVariables(date, this.translate.currentLang);

      this.languageSubscription = this.translate.onLangChange.subscribe(language => {
        this.updateDateVariables(date, language.lang);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  buildPlayerUrl(albumId: string, isTrack: boolean): SafeUrl {
    const albumPlayerUrl = this.buildBasePlayerUrl(albumId, isTrack);
    return this.sanitizer.bypassSecurityTrustResourceUrl(albumPlayerUrl);
  }

  private updateDateVariables(date: Moment, lang: string): void {
    date.locale(lang);
    this.monthName = date.format('MMMM').toUpperCase();
    this.year = date.format('YYYY').toString();
  }

  abstract buildBasePlayerUrl(albumId: string, isTrack: boolean): string;
}
