import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { LayoutModule } from '../../layout/layout.module';

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    LayoutModule
  ]
})
export class HomePageModule { }
