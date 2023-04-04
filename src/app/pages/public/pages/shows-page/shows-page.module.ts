import { SharedModule } from './../../../../shared/shared.module';
import { NgModule } from '@angular/core';

import { ShowsPageRoutingModule } from './shows-page-routing.module';
import { ShowsPageComponent } from './shows-page.component';
import { LayoutModule } from '../../layout/layout.module';


@NgModule({
  declarations: [
    ShowsPageComponent
  ],
  imports: [
    LayoutModule,
    SharedModule,
    ShowsPageRoutingModule
  ]
})
export class ShowsPageModule { }
