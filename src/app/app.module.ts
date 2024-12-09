import { I18nService } from './shared/services/i18n.service';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LayoutComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    TranslateModule,
    TranslateModule.forRoot()
  ],
  providers: [I18nService],
  bootstrap: [AppComponent]
})
export class AppModule { }
