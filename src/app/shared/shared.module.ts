import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ShowsService } from './services/shows.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    TranslateModule
  ],
  providers: [
    ShowsService,
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule,
    CommonModule,
    TranslateModule
  ]
})
export class SharedModule { }
