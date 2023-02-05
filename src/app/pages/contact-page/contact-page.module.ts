import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { ContactPageRoutingModule } from './contact-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    ContactPageRoutingModule,
    FontAwesomeModule,
    CommonModule,
    LayoutModule
  ],
  declarations: [ContactPageComponent]
})
export class ContactPageModule { }
