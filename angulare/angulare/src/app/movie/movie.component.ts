import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  coeur() {
    const bouton = document.getElementById('monBouton') as HTMLElement;
    const couleur = bouton.style.backgroundColor;

    if (couleur === 'red') {
      this.likes++;
    } else if (couleur === 'ffffff') {
      this.likes--;
    }
  }
  nam!: string;
  description!: string;
  likes!: number;
  img!: string;

  ngOnInit(): void {
    this.nam = "your name";
    this.description = "Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo";
    this.likes = 27;
    this.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgU16Eb1oOkYQLlCTH0qrXZ3tYBuJlk7xvIA&usqp=CAU";
  }
}

