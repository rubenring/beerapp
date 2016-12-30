import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { RecipiesComponent } from './recipies.component';
import { RecipieListComponent } from './recipie-list/recipie-list.component';
import { RecipieDetailsComponent } from './recipe-details/recipie-details.component';
import { RecipiesRoutingModule } from './recipies-routing.module';

import { RecipiService } from './recipie-list/recipie-list.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecipiesRoutingModule
  ],
  declarations: [
    RecipiesComponent,
    RecipieListComponent,
    RecipieDetailsComponent,
  ],
  providers: [
    RecipiService
  ]
})
export class RecipiesModule {}