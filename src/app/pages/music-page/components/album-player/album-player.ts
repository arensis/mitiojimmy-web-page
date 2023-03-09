import { Component, Directive, Input, OnInit } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

@Directive()
export abstract class AlbumPlayer implements OnInit {
  @Input()
  releaseDate?: string;
  @Input()
  albumImageUrl?: string;
  @Input()
  albumId?: string;

  safeAlbumPlayerUrl?: SafeUrl;
  saveAlbumImageUrl?: SafeUrl;

  constructor(protected sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    if (this.albumId) {
      this.safeAlbumPlayerUrl = this.buildPlayerUrl(this.albumId);
    }

    if (this.albumImageUrl) {
      this.saveAlbumImageUrl = this.sanitizer.bypassSecurityTrustUrl(this.albumImageUrl);
    }
  }

  buildPlayerUrl(albumId: string): SafeUrl {
    const albumPlayerUrl = this.buildBasePlayerUrl(albumId);
    return this.sanitizer.bypassSecurityTrustResourceUrl(albumPlayerUrl);
  }

  abstract buildBasePlayerUrl(albumId: string): string;
}
