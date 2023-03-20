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

  monthName!: string;
  year!: string;
  languageSubscription!: Subscription;

  constructor(protected sanitizer: DomSanitizer, private translate: TranslateService) {}

  ngOnInit(): void {
    if (this.album) {
      this.saveAlbumImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.album.imageUrl);
      this.safeAlbumPlayerUrl = this.buildPlayerUrl(this.album.id);
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

  buildPlayerUrl(albumId: string): SafeUrl {
    const albumPlayerUrl = this.buildBasePlayerUrl(albumId);
    return this.sanitizer.bypassSecurityTrustResourceUrl(albumPlayerUrl);
  }

  private updateDateVariables(date: Moment, lang: string): void {
    date.locale(lang);
    this.monthName = date.format('MMMM').toUpperCase();
    this.year = date.format('YYYY').toString();
  }

  abstract buildBasePlayerUrl(albumId: string): string;
}
