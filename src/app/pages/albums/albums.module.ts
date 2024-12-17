import { NgModule } from '@angular/core';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { SharedModule } from 'src/app/shared/shared.module';
import * as Components from './components';

@NgModule({
  declarations: [
    AlbumsComponent,
    Components.AlbumFormComponent
  ],
  imports: [
    SharedModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
