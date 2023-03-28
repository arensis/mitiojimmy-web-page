import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DahsboardLiveEntryComponent } from './components/dahsboard-live-entry/dahsboard-live-entry.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DahsboardLiveEntryComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
