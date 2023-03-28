import { NgModule } from '@angular/core';

import { VideosPageRoutingModule } from './videos-page-routing.module';
import { VideosPageComponent } from './videos-page.component';

import { LayoutModule } from 'src/app/pages/public/layout/layout.module';
import { BandVideosComponent } from './components/band-videos/band-videos.component';
import { VideoComponent } from './components/video/video.component';


@NgModule({
  imports: [
    LayoutModule,
    VideosPageRoutingModule
  ],
  declarations: [
    VideosPageComponent,
    BandVideosComponent,
    VideoComponent
  ]
})
export class VideosPageModule { }
