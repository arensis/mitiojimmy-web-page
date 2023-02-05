import { RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  declarations: [
   HeaderComponent,
   FooterComponent,
   SectionComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SectionComponent
  ]
})
export class LayoutModule { }
