import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FormsModule }   from '@angular/forms';

import { HeroService } from './hero.service';
import { HeroesComponent }     from './heroes.component';

import { HeroDetailComponent } from './hero-detail.component';
import { RouterModule }   from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot([
  {
    path: 'heroes',
    component: HeroesComponent
  }
]) 
],
  declarations: [ AppComponent , HeroDetailComponent , HeroesComponent ],
  providers: [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
