import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as PageModules from './pages';

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
    PageModules.BioPageModule,
    PageModules.ContactPageModule,
    PageModules.HomePageModule,
    PageModules.MusicPageModule,
    PageModules.LegalAdvisoriesPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
