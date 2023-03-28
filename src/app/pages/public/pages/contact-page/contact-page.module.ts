import { NgModule } from '@angular/core';
import { ContactPageComponent } from './contact-page.component';
import { LayoutModule } from 'src/app/pages/public/layout/layout.module';
import { ContactPageRoutingModule } from './contact-page-routing.module';

@NgModule({
  imports: [
    ContactPageRoutingModule,
    LayoutModule
  ],
  declarations: [ContactPageComponent]
})
export class ContactPageModule { }
