import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'bio',
    loadChildren: () => import('./pages/bio-page/bio-page.module').then(m => m.BioPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/music-page/music-page.module').then(m => m.MusicPageModule)
  },
  {
    path: 'shows',
    loadChildren: () => import('./pages/shows-page/shows-page.module').then(m => m.ShowsPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos-page/videos-page.module').then(m => m.VideosPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
  },
  {
    path: 'legal-advisories',
    loadChildren: () => import('./pages/legal-advisories-page/legal-advisories-page.module').then(m => m.LegalAdvisoriesPageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
