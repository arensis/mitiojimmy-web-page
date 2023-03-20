import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Video } from './../../../../model/videos/Video';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import moment, { Moment } from 'moment';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
  @Input()
  video?: Video;

  constructor(
    private sanitizer: DomSanitizer,
    private translate: TranslateService
  ) {}

  safeVideoUrl?: SafeUrl;

  monthName!: string;
  year!: string;
  languageSubscription!: Subscription;


  ngOnInit(): void {
    if (this.video) {
      this.safeVideoUrl = this.buildVideoUrl(this.video.id);
    }

    const date = moment(this.video?.releaseDate);
    this.updateDateVariables(date, this.translate.currentLang);

    this.languageSubscription = this.translate.onLangChange.subscribe(language => {
      this.updateDateVariables(date, language.lang);
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }

  buildVideoUrl(videoId: string): SafeUrl {
    const videoUrl = this.buildBaseVideoUrl(videoId);
    return this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
  }

  buildBaseVideoUrl(videoId: string): string {
    return 'https://www.youtube-nocookie.com/embed/'.concat(videoId);
  }

  private updateDateVariables(date: Moment, lang: string): void {
    date.locale(lang);
    this.monthName = date.format('MMMM').toUpperCase();
    this.year = date.format('YYYY').toString();
  }
}
