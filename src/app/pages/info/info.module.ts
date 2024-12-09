import { NgModule } from '@angular/core';

import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    SharedModule,
    InfoRoutingModule
  ]
})
export class InfoModule { }
