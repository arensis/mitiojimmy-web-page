import { MaterialModule } from './../../material.module';
import { LayoutModule } from './../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsPageRoutingModule } from './shows-page-routing.module';
import { ShowsPageComponent } from './shows-page.component';
import { LiveEntryComponent } from './components/live-entry/live-entry.component';


@NgModule({
  declarations: [
    ShowsPageComponent,
    LiveEntryComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialModule,
    ShowsPageRoutingModule
  ]
})
export class ShowsPageModule { }
