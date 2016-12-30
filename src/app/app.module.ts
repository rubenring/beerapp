import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { RecipiesModule } from "./components/recipies/recipies.module";
import { DashboardModule } from './components/dashboard/dashboard.module'

import { PageNotFoundComponent } from './not-found.component';
import { NavigationCompontent } from './components/navigation/navigation.compontent';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    DashboardModule,
    RecipiesModule,
    /*Allways keep app routing at the bottom*/
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationCompontent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
