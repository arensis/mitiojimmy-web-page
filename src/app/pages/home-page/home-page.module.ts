import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
