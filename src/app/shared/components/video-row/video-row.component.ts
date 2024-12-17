import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../../model/videos/Video';
import { Moment } from 'moment';
import moment from 'moment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-video-row',
  templateUrl: './video-row.component.html',
  styleUrls: ['./video-row.component.scss']
})
export class VideoRowComponent {
  @Input()
  video!: Video;
  @Output()
  onDelete = new EventEmitter<Video>();
  @Output()
  onEdit = new EventEmitter<Video>();

  monthName!: string;
  year!: string;
  safeVideoUrl?: SafeUrl;
  safeImageUrl?: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    const date = moment(this.video?.releaseDate);
    this.updateDateVariables(date, this.translate.currentLang);
    this.safeVideoUrl = this.buildVideoUrl(this.video.id);
    this.safeImageUrl = this.buildImageUrl(this.video.id);

  }

  deleteRow() {
    this.onDelete.emit(this.video);
  }

  editRow() {
    this.onEdit.emit(this.video);
  }

  private buildVideoUrl(videoId: string): SafeUrl {
    const videoUrl = this.buildBaseVideoUrl(videoId);
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  private buildBaseVideoUrl(videoId: string): string {
    return 'https://www.youtube-nocookie.com/embed/'.concat(videoId);
  }

  private buildImageUrl(videoId: string): SafeUrl {
    const imageUrl = this.buildBaseImageUrl(videoId);
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
  }

  private buildBaseImageUrl(videoId: string): string {
    return `https://img.youtube.com/vi/${videoId}/default.jpg`;
  }

  private updateDateVariables(date: Moment, lang: string): void {
    date.locale(lang);
    this.monthName = date.format('MMMM').toUpperCase();
    this.year = date.format('YYYY').toString();
  }
}
