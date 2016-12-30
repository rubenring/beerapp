import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardCompontent }   from './dashboard.component';

const dashboardRoutes: Routes = [
  { path: 'dashboard',  component: DashboardCompontent },
];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class DashboardRoutingModule { }