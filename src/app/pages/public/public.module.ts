import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import * as PageModules from './pages';

@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    PageModules.HomePageModule,
    PageModules.BioPageModule,
    PageModules.LegalAdvisoriesPageModule,
    PageModules.ContactPageModule,
    PageModules.BioPageModule,
    PageModules.VideosPageModule,
    PageModules.MusicPageModule,
    PageModules.ShowsPageModule
  ]
})
export class PublicModule { }
