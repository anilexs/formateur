import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './router.module';
import { FormsModule } from '@angular/forms';
import { NewMovieComponent } from './new-movie/new-movie.component';
import * as fr from '@angular/common/locales/fr'

import { AppComponent } from './app.component';
import { MoncomposantComponent } from './moncomposant/moncomposant.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MoncomposantComponent,
    NavbarComponent,
    MovieComponent,
    MovieListComponent,
    HomePageComponent,
    NewMovieComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "fr"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default)
  }
}
