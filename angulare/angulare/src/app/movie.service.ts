import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    movies!: Movie[];
    constructor() {
        this.movies = [
          new Movie(
          "your name",
          "Mitsuha, adolescente coincée dans une famille traditionnelle, rêve de quitter ses montagnes natales pour découvrir la vie trépidante de Tokyo Elle est loin d’imaginer pouvoir",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgU16Eb1oOkYQLlCTH0qrXZ3tYBuJlk7xvIA&usqp=CAU",
          27,
          false,
          1,
          4.95
        ),
        new Movie(
          "miraculous",
          "Ladybug va devoir unir ses forces avec Chat Noir, le charismatique justicier masqué qui n’a pas sa langue dans sa poche, pour affronter le Papillon et sa horde de super-vilains,",
          "https://fr.web.img3.acsta.net/c_310_420/pictures/23/04/03/15/05/1583867.jpg",
          95,
          false,
          2,
          7.75
        ),
        new Movie(
          "Sword Art Online: Ordinal Scale",
          "deux ans après avoir été libérés de S.A.O, Kazuto et ses amis survivants profitent enfin de jours paisibles. Récemment, la réalité augmentée est devenue possible grâce à l'Augma",
          "https://fr.shopping.rakuten.com/photo/1382786176.jpg",
          56,
          false,
          3,
          7.75
        ),
        new Movie(
          "Oshi no ko",
          "Le docteur Gorô est obstétricien dans un hôpital de campagne. Il est loin du monde de paillettes dans lequel évolue Ai Hoshino, une chanteuse au succès grandissant",
          "https://m.media-amazon.com/images/I/71Y8AWFyjoL._AC_UF1000,1000_QL80_.jpg",
          72,
          false,
          4,
          2
        ),
        new Movie(
          "LoliRock",
          "Iris est une fille normale. Cependant, lorsqu'elle chante, elle produit des choses étranges. Pendant ce temps, deux jeunes filles, Talia et Auriana, décident de faire passer",
          "https://fusion.molotov.tv/arts/i/446x588/Ch8SHQoUAEtxHG6VqZZ9mfTZULDc_-l2VlMSA2pwZxgBCh8IARIbChTKfwpvZaJObn27Ib81OaidA-arbRIDcG5n/jpg",
          41,
          false,
          5,
          1
        ),
        new Movie(
          "Belle",
          "Dans la vie réelle, Suzu est une adolescente complexée, coincée dans sa petite ville de montagne avec son père. Mais dans le monde virtuel de U, Suzu devient Belle,",
          "https://fr.web.img5.acsta.net/pictures/21/11/10/17/42/2106224.jpg",
          38,
          false,
          6,
          4.98
        ),
        new Movie(
          "Tokyo Mew Mew",
          "Des extra-terrestres veulent conquérir la Terre en utilisant les animaux mais deux adolescents, Ryo Shirogane et Keichiro Akasaka, tentent de lutter contre ces extra-terrestres",
          "https://www.nautiljon.com/images/anime/00/25/tokyo_mew_mew_252.webp",
          17,
          false,
          7,
          1
        ),
        new Movie(
          "Kizuna no Allele",
          "Miracle est une étudiante de l'Académie du monde virtuel ADEN. Elle admire Kizuna AI et veut, comme elle, devenir une artiste virtuelle. Le jour de sa première représentation",
          "https://www.nautiljon.com/images/anime/00/90/kizuna_no_allele_11009.webp",
          19,
          false,
          8,
          2
        ),
        new Movie(
          "Fairy Tail",
          "Lucy, une jeune fille, rêve de devenir magicienne. Un jour, elle rencontre Natsu, un magicien maîtrisant le feu, ce dernier l'invite alors à rejoindre sa guilde. Il s'agit de la célèbre Fairy Tail",
          "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/18638d44e180fd1b51870106b88e46e4.jpe",
          71,
          false,
          9,
          4
        ),
        new Movie(
          "suzume",
          "Dans une petite ville paisible de Kyushu, une jeune fille de 17 ans, Suzume, rencontre un homme qui dit voyager à la recherche d’une porte. Décidant de le suivre dans les montagnes, elle découvre",
          "https://fr.web.img6.acsta.net/c_310_420/pictures/23/03/15/10/25/0882766.jpg",
          71,
          false,
          10,
          7.95
        ),
    ]
    }
}