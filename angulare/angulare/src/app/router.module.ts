import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { NewMovieComponent } from "./new-movie/new-movie.component";

const routes: Routes = [
 { path: '', component:  HomePageComponent},
 { path: 'liste', component:  MovieListComponent},
 { path: 'new', component:  NewMovieComponent}
]
@NgModule({
 imports: [
 RouterModule.forRoot(routes)
 ],
 exports: [
 RouterModule
 ]
})
export class RoutingModule{}