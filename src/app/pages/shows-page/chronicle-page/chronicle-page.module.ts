import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChroniclePageRoutingModule } from './chronicle-page-routing.module';
import { ChroniclePageComponent } from './chronicle-page.component';


@NgModule({
  declarations: [
    ChroniclePageComponent
  ],
  imports: [
    CommonModule,
    ChroniclePageRoutingModule
  ]
})
export class ChroniclePageModule { }
