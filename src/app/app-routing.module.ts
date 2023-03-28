import { seoSectionsMetadata } from './shared/model/seo-metadata';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',
    data: seoSectionsMetadata.homePage,
    loadChildren: () => import('./pages/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./pages/backoffice/backoffice.module').then(m => m.BackofficeModule)
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
