import { DataService } from 'src/app/shared/services/data.service';
import { ShowsService } from './services/shows.service';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ItemsService } from './services/items.service';
import { I18nService } from './services/i18n.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import * as Components from './components';
import * as Directives from './directives';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [
    Components.LiveDateComponent,
    Components.LiveEntryComponent,
    Components.LiveGuestArtistComponent,
    Components.LiveInfoComponent,
    Components.NearestShowComponent,
    Components.NewReleaseComponent,
    Components.ReleaseCoverComponent,
    Components.LiveEntryWidgetComponent,
    Components.VideoRowComponent,
    Components.EditionListContainerComponent,
    Components.EditionRowItemComponent,
    Directives.HoverClassDirective,
    Directives.ModalDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FontAwesomeModule,
    TranslateModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ShowsService,
    DataService,
    AuthService,
    ItemsService,
    I18nService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
      minWidth: 300,
      width: '80%',
      maxWidth: 1000
    }}
  ],
  exports: [
    Components.LiveDateComponent,
    Components.LiveEntryComponent,
    Components.LiveGuestArtistComponent,
    Components.LiveInfoComponent,
    Components.NearestShowComponent,
    Components.NewReleaseComponent,
    Components.ReleaseCoverComponent,
    Components.LiveEntryWidgetComponent,
    Components.VideoRowComponent,
    Components.EditionListContainerComponent,
    Components.EditionRowItemComponent,
    Directives.HoverClassDirective,
    Directives.ModalDirective,
    MaterialModule,
    RouterModule,
    FontAwesomeModule,
    CommonModule,
    TranslateModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
