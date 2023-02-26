import { LayoutModule } from './../../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsPageRoutingModule } from './shows-page-routing.module';
import { ShowsPageComponent } from './shows-page.component';


@NgModule({
  declarations: [
    ShowsPageComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    ShowsPageRoutingModule
  ]
})
export class ShowsPageModule { }
