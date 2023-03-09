import { BandVideos } from './../../../../model/videos/BandVideos';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-band-videos',
  templateUrl: './band-videos.component.html',
  styleUrls: ['./band-videos.component.scss']
})
export class BandVideosComponent {
  @Input()
  bandVideos?: BandVideos;

  trackFn(index: number, item: any) {
    return index;
  }
}
