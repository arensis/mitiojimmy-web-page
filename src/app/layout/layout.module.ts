import { TranslateModule } from '@ngx-translate/core';
import { LanguageSelectComponent } from './language-select/language-select.component';
import { RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from '../material.module';
import { SectionBioComponent } from './section-bio/section-bio.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    TranslateModule,
    SharedModule
  ],
  declarations: [
   HeaderComponent,
   FooterComponent,
   SectionComponent,
   SectionBioComponent,
   LanguageSelectComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SectionBioComponent,
    TranslateModule
  ]
})
export class LayoutModule { }
