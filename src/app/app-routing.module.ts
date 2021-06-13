import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewVariantComponent } from './new-variant/new-variant.component';
import { VariantDashboardComponent } from './variant-dashboard/variant-dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/variants',
    pathMatch: 'full'
  },
  {
    path: 'variants',
    component: VariantDashboardComponent
  },
  {
    path: 'new-variant',
    component: NewVariantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
