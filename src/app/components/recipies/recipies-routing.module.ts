import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipiesComponent }   from './recipies.component';
import { RecipieDetailsComponent } from './recipe-details/recipie-details.component';

const RecipiesRoutes: Routes = [
  { 
    path: 'oppskrifter',  
    component: RecipiesComponent, 
    children: [
      {
        path: ':id',
        component: RecipieDetailsComponent
      }
    ]
  },
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