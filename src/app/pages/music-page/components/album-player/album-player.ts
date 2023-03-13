import { Component, Directive, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { Album } from "src/app/model/discography/Album";

@Directive()
export abstract class AlbumPlayer implements OnInit {
  @Input()
  album?: Album;

  safeAlbumPlayerUrl?: SafeUrl;
  saveAlbumImageUrl?: SafeUrl;
  coverImageAltText?: string;

  constructor(protected sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.album) {
      this.saveAlbumImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.album.imageUrl);
      this.safeAlbumPlayerUrl = this.buildPlayerUrl(this.album.id);
      this.coverImageAltText = ['Portada de álbum', this.album.albumName].join(': ');
    }
  }

  buildPlayerUrl(albumId: string): SafeUrl {
    const albumPlayerUrl = this.buildBasePlayerUrl(albumId);
    return this.sanitizer.bypassSecurityTrustResourceUrl(albumPlayerUrl);
  }

  abstract buildBasePlayerUrl(albumId: string): string;
}
