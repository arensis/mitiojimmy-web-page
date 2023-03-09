import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Video } from './../../../../model/videos/Video';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
  @Input()
  video?: Video;

  constructor(private sanitizer: DomSanitizer) {}

  safeVideoUrl?: SafeUrl;

  ngOnInit(): void {
    if (this.video) {
      this.safeVideoUrl = this.buildVideoUrl(this.video.id);
    }
  }

  buildVideoUrl(videoId: string): SafeUrl {
    const videoUrl = this.buildBaseVideoUrl(videoId);
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  buildBaseVideoUrl(videoId: string): string {
    return 'https://www.youtube-nocookie.com/embed/'.concat(videoId);
  }
}
