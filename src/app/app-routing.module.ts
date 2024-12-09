import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components';

const routes: Routes = [
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    component: LayoutComponent,
    path: 'shows',
    loadChildren: () => import('./pages/shows/shows.module').then(m => m.ShowsModule)
  },
  {
    component: LayoutComponent,
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then(m => m.VideosModule)
  },
  {
    component: LayoutComponent,
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule)
  },
  {
    component: LayoutComponent,
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    component: LayoutComponent,
    path: 'albums',
    loadChildren: () => import('./pages/albums/albums.module').then(m => m.AlbumsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
