import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import * as Components from './components/index';

@NgModule({
  declarations: [
    HomePageComponent,
    Components.NearestShowComponent
  ],
  imports: [
    HomePageRoutingModule,
    SharedModule
  ]
})
export class HomePageModule { }
