import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosPageRoutingModule } from './videos-page-routing.module';
import { VideosPageComponent } from './videos-page.component';

import { MaterialModule } from 'src/app/material.module';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    VideosPageRoutingModule
  ],
  declarations: [
    VideosPageComponent
  ]
})
export class VideosPageModule { }
