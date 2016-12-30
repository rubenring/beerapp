import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { RecipiesComponent } from './recipies.component';

import { RecipiesRoutingModule } from './recipies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RecipiesRoutingModule
  ],
  declarations: [
    RecipiesComponent,
  ],
  providers: []
})
export class RecipiesModule {}