/*
A V A N T A G E S        J A V A S C R I P T
--- language dynamique | interactif | polyvalent | large communauté. ---
 */

/*
L E       R O L E       D ' U N E        C O N D I T I O N
--- permet d'éxécuter des bloques de code en fonction de l'etat de l'application actuelle. ---
 */

// let largeur = 2;
// let longueur = 4;
// let hauteur = 1;
// let volume = 0;

// volume = largeur * longueur * hauteur;
// console.log(volume);

/* if et else if et else */

// let age = prompt();

// if (age < 5) {
//   console.log("bébé");
// } else if (age >= 5 && age <= 10) {
//   console.log("enfant");
// } else if (age >= 11 && age <= 18) {
//   console.log("ado");
// } else {
//   console.log("vieux");
// }

/*
(4 === 4) && (5 != "5");              // false
(10 > 5) || (3 <= 2);                 // true
'!'(true && false);                     // true
(4 >= 4) && !(false || true);         // false
(7 >= 8) || !(false && true);         // true
(5 > 3) && (10 == 10);                // true
'!'(true || false) && (6 >= 6);         // false
(8 <= 4) || !(false && true);         // true
'!'((10 > 8) || (5 < 2));               // false
*/

/*
en utilisant la structure conditionnelle switch
ecrire un programme qui affiche le jour de la semaine en
fonction d'un nombre donné
si nombre - 0 afficher dimanche etc...
*/

// let nombre = 3;

// switch (nombre) {
//   case 0:
//     console.log("Dimanche");
//     break;
//   case 1:
//     console.log("Lundi");
//     break;
//   case 2:
//     console.log("Mardi");
//     break;
//   case 3:
//     console.log("Mercredi");
//     break;
//   case 4:
//     console.log("Jeudi");
//     break;
//   case 5:
//     console.log("Vendredi");
//     break;
//   case 6:
//     console.log("Samedi");
//     break;
//   default:
//     console.log("Numéro de jour invalide");
// }

/*
en utilisant le ternaire ecrire un programme
qui affiche adulte si l'age est superieur ou egal a 18
et mineur si age est inferieur a 18
*/

// let age = prompt("Quel est votre age ?");

// let statut = age >= 18 ? "adulte" : "mineur";

// console.log(statut);

/*
une annee bisextile est une
1 - annee divisible par 4 sans etre divisible par 100
soit :
2- divisible par 400
*/

// let annee = prompt("Mettez une année pour voir s'il est bissextile");

// if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
//   console.log(annee + " est une année bissextile.");
// } else {
//   console.log(annee + " n'est pas une année bissextile.");
// }

//  B R E A K

/*
exemple du break => arreter l'execution de la boucle si la variable i = 4

for (let i = 0; i < 10; i++){
  console.log(i); //affiche i
  if (i == 4) { // si i = 4
    break; // sortir de la boucle
  }
}
*/

/*
exemple du continue => on souhaite afficher que les nombres paires entre 0 et 10
*/
// pour les nombres pairs

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 != 0) { // verifie si "i" n'est pas un nombre pair
//     continue; // passe a l'iteration suivante
//   }
//   console.log(i);
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }


// pour les nombres impairs

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0) { // verifie si "i" est pas un nombre impair
//     continue; // passe a l'iteration suivante
//   }
//   console.log(i);
// }