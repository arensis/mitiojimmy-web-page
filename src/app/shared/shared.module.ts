import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { ShowsService } from './services/shows.service';
import SEOService from './services/seo.service';
import { I18nService } from './services/i18n.service';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { DataService } from './services/data.service';
import { HoverClassDirective } from './directives/hover-class.directive';
import { RouterModule } from '@angular/router';
import * as Components from './components';

@NgModule({
  declarations: [
    HoverClassDirective,
    Components.LiveEntryWidgetComponent,
    Components.NewReleaseComponent,
    Components.ReleaseCoverComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FontAwesomeModule,
    TranslateModule
  ],
  providers: [
    ShowsService,
    SEOService,
    I18nService,
    GoogleAnalyticsService,
    DataService
  ],
  exports: [
    MaterialModule,
    FontAwesomeModule,
    CommonModule,
    TranslateModule,
    RouterModule,
    HoverClassDirective,
    Components.LiveEntryWidgetComponent,
    Components.NewReleaseComponent,
    Components.ReleaseCoverComponent
  ]
})
export class SharedModule { }
