import { LayoutModule } from 'src/app/layout/layout.module';
import { LegalAdvisoriesPageRoutingModule } from './legal-advisories-page.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalAdvisoriesPageComponent } from './legal-advisories-page.component';

@NgModule({
  imports: [
    LegalAdvisoriesPageRoutingModule,
    CommonModule,
    LayoutModule
  ],
  declarations: [LegalAdvisoriesPageComponent]
})
export class LegalAdvisoriesPageModule { }
