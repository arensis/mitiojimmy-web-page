import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MusicPageRoutingModule } from './music-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicPageComponent } from './music-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';


@NgModule({
  imports: [
    MusicPageRoutingModule,
    CommonModule,
    LayoutModule,
    FontAwesomeModule
  ],
  declarations: [MusicPageComponent]
})
export class MusicPageModule { }
