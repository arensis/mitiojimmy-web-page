import { SharedModule } from './../../../shared/shared.module';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionBioComponent } from './section-bio/section-bio.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  declarations: [
   HeaderComponent,
   FooterComponent,
   SectionComponent,
   SectionBioComponent,
   LanguageSelectComponent,
   PublicLayoutComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SectionBioComponent,
    PublicLayoutComponent,
    SharedModule
  ]
})
export class LayoutModule { }
