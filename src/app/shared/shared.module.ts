import { DataService } from 'src/app/shared/services/data.service';
import { ShowsService } from './services/shows.service';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material.module';
import { LiveDateComponent } from './components/live-date/live-date.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveGuestArtistComponent } from './components/live-guest-artist/live-guest-artist.component';
import { LiveInfoComponent } from './components/live-info/live-info.component';
import { LiveEntryComponent } from './components/live-entry/live-entry.component';



@NgModule({
  declarations: [
    LiveDateComponent,
    LiveGuestArtistComponent,
    LiveInfoComponent,
    LiveEntryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    TranslateModule
  ],
  providers: [
    ShowsService,
    DataService
  ],
  exports: [
    LiveDateComponent,
    LiveGuestArtistComponent,
    LiveInfoComponent,
    LiveEntryComponent,
    MaterialModule,
    FontAwesomeModule,
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule { }