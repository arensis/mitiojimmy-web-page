import { NgModule } from '@angular/core';
import { ShowsRoutingModule } from './shows-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowsComponent } from './shows.component';
import * as Components from './components';


@NgModule({
  declarations: [
    ShowsComponent,
    Components.ShowFormComponent
  ],
  imports: [
    ShowsRoutingModule,
    SharedModule
  ]
})
export class ShowsModule { }
