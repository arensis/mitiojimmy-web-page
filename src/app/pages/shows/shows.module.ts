import { NgModule } from '@angular/core';
import { ShowsRoutingModule } from './shows-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShowsComponent } from './shows.component';


@NgModule({
  declarations: [
    ShowsComponent
  ],
  imports: [
    ShowsRoutingModule,
    SharedModule
  ]
})
export class ShowsModule { }
