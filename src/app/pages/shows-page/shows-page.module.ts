import { MaterialModule } from './../../material.module';
import { LayoutModule } from './../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsPageRoutingModule } from './shows-page-routing.module';
import { ShowsPageComponent } from './shows-page.component';
import { LiveEntryComponent } from './components/live-entry/live-entry.component';
import { LiveDateComponent } from './components/live-date/live-date.component';
import { LiveInfoComponent } from './components/live-info/live-info.component';
import { LiveGuestArtistComponent } from './components/live-guest-artist/live-guest-artist.component';


@NgModule({
  declarations: [
    ShowsPageComponent,
    LiveEntryComponent,
    LiveDateComponent,
    LiveInfoComponent,
    LiveGuestArtistComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    ShowsPageRoutingModule
  ]
})
export class ShowsPageModule { }
