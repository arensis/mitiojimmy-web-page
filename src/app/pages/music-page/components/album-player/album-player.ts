import { TranslateService } from '@ngx-translate/core';
import { Component, Directive, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import moment, { Moment } from "moment";
import { Album } from "src/app/model/discography/Album";
import { Subscription } from 'rxjs';

@Directive()
export abstract class AlbumPlayer implements OnInit {
  @Input()
  album?: Album;

  safeAlbumPlayerUrl?: SafeUrl;
  saveAlbumImageUrl?: SafeUrl;
  coverImageAltText?: string;
  img = ''
  bandCampLink = ''

  monthName!: string;
  year!: string;
  languageSubscription!: Subscription;

  constructor(protected sanitizer: DomSanitizer, private translate: TranslateService) {}

  ngOnInit(): void {
    if (this.album) {
      switch(this.album?.albumName) {
        case 'Perdita mundi': {
          this.img = 'assets/images/temp/bandcamp-perditamundi.png';
          this.bandCampLink = 'https://magneticaonline.bandcamp.com/album/perdita-mundi?from=embed'
          break;
        }
        case 'De música ligera': {
          this.img = 'assets/images/temp/bandcamp-musicaligera.png';
          this.bandCampLink = 'https://magneticaonline.bandcamp.com/album/de-m-sica-ligera?from=embed'
          break;
        }
        case 'Friogenia': {
          this.img = 'assets/images/temp/bandcamp-friogenia.png';
          this.bandCampLink = 'https://magneticaonline.bandcamp.com/album/friogenia?from=embed'
          break;
        }
        case 'Maida Vale': {
          this.img = 'assets/images/temp/bandcamp-maidavale.png';
          this.bandCampLink = 'https://magneticaonline.bandcamp.com/album/maida-vale?from=embed'
          break;
        }
        case 'Los Elegidos': {
          this.img = 'assets/images/temp/bandcamp-loselegidos.png';
          this.bandCampLink = 'https://mitiojimmy.bandcamp.com/track/los-elegidos'
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
