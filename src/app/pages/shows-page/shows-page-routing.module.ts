import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsPageComponent } from './shows-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShowsPageComponent,
    children: [
      {
        path: 'chronicle',
        loadChildren: () => import('./chronicle-page/chronicle-page.module').then(m => m.ChroniclePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsPageRoutingModule { }
