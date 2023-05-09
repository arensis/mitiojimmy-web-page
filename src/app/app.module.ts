import { TranslateModule } from '@ngx-translate/core';
import { ShowsPageModule } from './pages/shows-page/shows-page.module';
import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as PageModules from './pages';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule,
    LayoutModule,
    HttpClientModule,
    PageModules.BioPageModule,
    PageModules.ContactPageModule,
    PageModules.HomePageModule,
    PageModules.MusicPageModule,
    PageModules.LegalAdvisoriesPageModule,
    PageModules.HomePageModule,
    PageModules.ShowsPageModule,
    PageModules.VideosPageModule,
    TranslateModule,
    TranslateModule.forRoot(),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
