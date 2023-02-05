import { LayoutModule } from './../../layout/layout.module';
import { SectionComponent } from './../../layout/section/section.component';
import { BioPageRoutingModule } from './bio-page-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioPageComponent } from './bio-page.component';

@NgModule({
  imports: [
    BioPageRoutingModule,
    CommonModule,
    LayoutModule
  ],
  declarations: [BioPageComponent]
})
export class BioPageModule { }
