import { LayoutModule } from '../../layout/layout.module';
import { BioPageRoutingModule } from './bio-page-routing.module';
import { NgModule } from '@angular/core';
import { BioPageComponent } from './bio-page.component';

@NgModule({
  imports: [
    BioPageRoutingModule,
    LayoutModule
  ],
  declarations: [BioPageComponent]
})
export class BioPageModule { }
