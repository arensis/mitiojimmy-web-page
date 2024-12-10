import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BandVideos } from 'src/app/shared/model/videos/BandVideos';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit, OnDestroy {
  videosSubscription!: Subscription;
  bands: BandVideos[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.videosSubscription = this.dataService.getVideosData()
    .subscribe(videos => this.bands = videos);
  }

  ngOnDestroy(): void {
    if (this.videosSubscription) {
      this.videosSubscription.unsubscribe();
    }
  }

  trackFn(index: number, item: any, ) {
    return index;
  }
}
