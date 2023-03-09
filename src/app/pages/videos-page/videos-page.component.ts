import { DataService } from './../../services/data.service';
import { BandVideos } from './../../model/videos/BandVideos';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videos-page',
  templateUrl: './videos-page.component.html',
  styleUrls: ['./videos-page.component.scss']
})
export class VideosPageComponent implements OnInit, OnDestroy {
  bandVideosSubscription?: Subscription;
  bands: BandVideos[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.bandVideosSubscription = this.dataService.getVideosData()
      .subscribe(bands => this.bands = bands);
  }

  ngOnDestroy(): void {
    if (this.bandVideosSubscription) {
      this.bandVideosSubscription.unsubscribe();
    }
  }

  trackFn(index: number, item: any) {
    return index;
  }
}
