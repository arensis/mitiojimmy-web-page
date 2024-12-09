import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DahsboardLiveEntryComponent } from './components/dahsboard-live-entry/dahsboard-live-entry.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


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
