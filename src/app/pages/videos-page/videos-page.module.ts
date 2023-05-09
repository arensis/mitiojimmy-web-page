import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosPageRoutingModule } from './videos-page-routing.module';
import { VideosPageComponent } from './videos-page.component';

import { MaterialModule } from 'src/app/material.module';
import { LayoutModule } from 'src/app/layout/layout.module';
import { BandVideosComponent } from './components/band-videos/band-videos.component';
import { VideoComponent } from './components/video/video.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    VideosPageRoutingModule,
    SharedModule
  ],
  declarations: [
    VideosPageComponent,
    BandVideosComponent,
    VideoComponent
  ]
})
export class VideosPageModule { }
