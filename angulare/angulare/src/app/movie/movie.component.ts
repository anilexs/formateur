import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../models/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent{
  constructor(private serviceMovie : MovieService){
    
  }
  @Input() movie!: Movie;
  color: string = 'white';
  nbLikes = 0
  
  likesPage(){
    
  }
  coeur() {
    if (this.movie.bool == false) {
      this.movie.likes++;
      this.color = 'red';
      this.nbLikes++;
      this.movie.bool = true;
    } else {
      this.movie.likes--;
      this.color = 'white';
      this.nbLikes--;
      this.movie.bool = false;
    }
  }
  remove(){
     const index = this.serviceMovie.movies.findIndex((film) => film.id === this.movie.id);
    if (index !== -1) {
      this.serviceMovie.movies.splice(index, 1);}

  }

  // nam!: string;
  // description!: string;
  // likes!: number;
  // img!: string;
  // nbLikes!: number;
  // bool!: boolean;

  // ngOnInit(): void {
    // this.movie = new Movie(
    //   "your name",
    //   "Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo",
    //   27,
    //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgU16Eb1oOkYQLlCTH0qrXZ3tYBuJlk7xvIA&usqp=CAU",
    //   0,
    //   false
    // );
  // }
}
