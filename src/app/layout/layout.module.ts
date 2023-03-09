import { RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material.module';
import { SectionBioComponent } from './section-bio/section-bio.component';

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
   SectionComponent,
   SectionBioComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SectionBioComponent
  ]
})
export class LayoutModule { }
