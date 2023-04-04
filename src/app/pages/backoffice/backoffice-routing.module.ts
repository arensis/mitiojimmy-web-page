import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackofficeComponent } from './backoffice.component';

const routes: Routes = [
  {
    path: '',
    component: BackofficeComponent,
    children: [
      {
        path: 'shows',
        loadChildren: () => import('./pages/shows/shows.module').then(m => m.ShowsModule)
      },
      {
        path: 'bio',
        loadChildren: () => import('./pages/bio/bio.module').then(m => m.BioModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('./pages/videos/videos.module').then(m => m.VideosModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'albums',
        loadChildren: () => import('./pages/albums/albums.module').then(m => m.AlbumsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
