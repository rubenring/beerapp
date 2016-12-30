import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipiesComponent }   from './recipies.component';

const RecipiesRoutes: Routes = [
  { path: 'oppskrifter',  component: RecipiesComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(RecipiesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class RecipiesRoutingModule { }