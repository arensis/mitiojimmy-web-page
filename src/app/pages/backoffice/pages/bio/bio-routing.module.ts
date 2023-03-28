import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BioComponent } from './bio.component';

const routes: Routes = [{ path: '', component: BioComponent, outlet: 'backoffice' }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BioRoutingModule { }
