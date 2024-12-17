import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BandVideos } from 'src/app/shared/model/videos/BandVideos';
import { Video } from 'src/app/shared/model/videos/Video';
import { DataService } from 'src/app/shared/services/data.service';
import { VideoFormComponent } from './components';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit, OnDestroy {
  videosSubscription!: Subscription;
  bands: BandVideos[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.videosSubscription = this.dataService.getVideosData()
    .subscribe(videos => this.bands = videos);
  }

  ngOnDestroy(): void {
    if (this.videosSubscription) {
      this.videosSubscription.unsubscribe();
    }
  }

  openFormDialog(video?: Video) {
    if (video) {
      this.dialog.open(VideoFormComponent, { data: video }).afterClosed().subscribe(video => {
        this.updateVideo(video);
      });
    } else {
      this.dialog.open(VideoFormComponent).afterClosed().subscribe(video => {
        this.saveVideo(video);
      });
    }
  }

  deleteVideo(video: Video) {
    console.log('Delete video', video);
  }

  trackFn(index: number, item: any, ) {
    return index;
  }

  private saveVideo(video: Video) {
    console.log('Save video', video);
  }

  private updateVideo(video: Video) {
    console.log('update video', video);
  }
}
