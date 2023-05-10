import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChroniclePageComponent } from './chronicle-page.component';

const routes: Routes = [{ path: ':id', component: ChroniclePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChroniclePageRoutingModule { }
