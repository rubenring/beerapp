import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './components/details/detail.component'
import { HeroService } from './services/hero.service';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    DetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
