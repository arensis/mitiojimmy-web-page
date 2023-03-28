import { LayoutModule } from 'src/app/pages/public/layout/layout.module';
import { LegalAdvisoriesPageRoutingModule } from './legal-advisories-page.routing';
import { NgModule } from '@angular/core';
import { LegalAdvisoriesPageComponent } from './legal-advisories-page.component';

@NgModule({
  imports: [
    LegalAdvisoriesPageRoutingModule,
    LayoutModule
  ],
  declarations: [LegalAdvisoriesPageComponent]
})
export class LegalAdvisoriesPageModule { }
