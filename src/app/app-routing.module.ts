import { seoSectionsMetadata } from './model/seo-metadata';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: seoSectionsMetadata.homePage,
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: 'bio',
    data: seoSectionsMetadata.bioPage,
    loadChildren: () => import('./pages/bio-page/bio-page.module').then(m => m.BioPageModule)
  },
  {
    path: 'discography',
    data: seoSectionsMetadata.discographyPage,
    loadChildren: () => import('./pages/music-page/music-page.module').then(m => m.MusicPageModule)
  },
  {
    path: 'shows',
    data: seoSectionsMetadata.showsPage,
    loadChildren: () => import('./pages/shows-page/shows-page.module').then(m => m.ShowsPageModule)
  },
  {
    path: 'videos',
    data: seoSectionsMetadata.videosPage,
    loadChildren: () => import('./pages/videos-page/videos-page.module').then(m => m.VideosPageModule)
  },
  {
    path: 'contact',
    data: seoSectionsMetadata.contactPage,
    loadChildren: () => import('./pages/contact-page/contact-page.module').then(m => m.ContactPageModule)
  },
  {
    path: 'legal-advisories',
    data: seoSectionsMetadata.legalAdvisoriesPage,
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
