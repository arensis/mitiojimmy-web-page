import { NgModule } from '@angular/core';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import * as Components from './components';


@NgModule({
  declarations: [
    VideosComponent,
    Components.VideoFormComponent
  ],
  imports: [
    SharedModule,
    VideosRoutingModule
  ]
})
export class VideosModule { }
