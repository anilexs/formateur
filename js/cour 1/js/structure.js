// var largeur = 5;
// var longueur = 10;
// var hauteur = 7;

// var volume = 0;

// volume = largeur*longueur*hauteur;
// console.log(volume);

// let age = 2;
// if (age<5){
//     console.log("bebe");
// }else if(age>=5 && age<=10){
//     console.log("enfant");
// }else if( age>=11 && age<=18){
//     console.log("ado");
// }else if (age > 18){
//     console.log("vieux");
// }

// var num = 0;
// switch (num){
//     case 1:
//         console.log("lundie");
//     break;
//     case 2:
//         console.log("mardi");
//     break;
//     case 3:
//         console.log("mercredi");
//     break;
//     case 4:
//         console.log("jeudi");
//     break;
//     case 5:
//         console.log("vendredi");
//     break;
//     case 6:
//         console.log("samedi");
//     break;
//     case 0:
//         console.log("dimanche");
//     break;
// }

// var age = 16;
// var ternaire = (age <= 18) ? "mineur" : "adulte";
// console.log(ternaire);

// var ans = 2003;
// if (ans%4 == 0 && ans%100 !== 0){
//     console.log("bisextile");
// }else if (ans%400 == 0){
//     console.log("bisextille");
// }else{
//     console.log("non bisextille");
// }

// var ans2 = 2003;
// if (ans2%4 == 0 && ans2%100 !== 0 ||ans2%400 == 0){
//     console.log("bisextile");
// }else{
//     console.log("non bisextille");
// }

// let fruit = ["bannane", "pomme", "mangue"]
// fruit.splice(2,0,"fraise")
// console.log(fruit);
// fruit.fill("goyave")
// console.log(fruit);

// function maxMin (a,b, c = true){
//     if (c == true){
//         if (a > b){
//             console.log(a);
//             return a;
//         }else{
//             console.log(b);
//             return b;
//         }
//     }else if(c == false){
//         if (a < b){
//             console.log(a);
//             return a;
//         }else{
//             console.log(b);
//             return b;
//         }
//     }

// }

// maxMin(4,1,false);

// EX a fair :

// a est retourné si c = true et a > b ou bien c = false et a < b
// 	=> a
// b est retourné s c = true et b > a ou bien c  = false et b < a
// 	=> b
    // function maxMin(a, b, c = true) {
    //     if (((c == true) && (a > b)) || ((c == false) && (a < b))) {
    //         return a;
    //     } else if (((c == true) && (a < b)) || ((c == false) && (a > b))) {
    //         return b;
    //     }
    // }
        
    // let result = maxMin(3, 8, false);
    // console.log(result);
// 

// var tableauFun = [1,2,3,4,5,6,7,8,9] 
// function sommeTab(tableau){
//     var num = 0;
//     for(var i = 0; i < tableau.length; i++){
//         num = num + tableauFun[i];
//     }
//     return num;
// }

// var resulta = sommeTab(tableauFun);
// console.log(resulta);


// coriger

// let num = 1; // variable num qui contient la valeur 1
// do { // faire:
//     if (num % 2 === 0) { // si num est divisible par 2 (a savoir un nombre pair)
//         console.log(num); // afficher num
//     }
//     num++; //incrementer num
// } while (num <= 20); // tant que num est inferieur ou egale a 20

 

// function someTab(tableau) { // fonction someTab prend un parametre
//     let somme = 0; // initialisation de la variable somme à 0
//     let i = 0; // initialisation de la variable i à 0
//     //  0 correspond a la premiere position du tableau
//     while (i < tableau.length) { // tant que i est plus petit que la taille du tableau
//         // on ajoute la valeur de la position i du tableau a la variable somme
//         somme = tableau[i] + somme;
//         i++; // incrementer i
//         // somme += tableau[i];
//     }
//     // a la fin de la boucle on retourne la somme
//     return somme;
// }

 

// let tab = [1, 2, 8, 5, 6];
// let resultat2 = someTab(tab);
// console.log(resultat2); // => affiche 22

 

// eviter cette mauvaise maniere
// let resultat3 = someTab([1, 6, 9]); // => 16 

//  exercice

// var tabmax = [1,555,648,52,0,1,4,5,];
// function maxTab(tabMax){
//     let tabelle = tabMax[0];

//     for (var i = 0; i < tabMax.length; i++){
//         if (tabMax[i] > tabelle){
//             tabelle = tabMax[i];
//         }
//     }
//     return tabelle;
// }
// console.log(maxTab(tabmax));



// var tabmin2 = [1,555,648,52,0,4,5,];
// function maxMin(tabMin){
//     let tabelle2 = tabMin[0];

//     for (var i = 0; i < tabMin.length; i++){
//         if (tabMin[i] < tabelle2){
//             tabelle2 = tabMin[i];
//         }
//     }
//     return tabelle2;
// }
// console.log(maxMin(tabmin2));

// var i = 30;
// var e = 30;
// function clg(log){
//     console.log(log);
// }
// clg("bonjour en revoir " + (i + e) + " hello");

// let num = 1; // variable num qui contient la valeur 1
// do { // faire:
//     if (num % 2 === 0) { // si num est divisible par 2 (a savoir un nombre pair)
//         console.log(num); // afficher num
//     }
//     num++; //incrementer num
// } while (num <= 20); // tant que num est inferieur ou egale a 20

 

// function someTab(tableau) { // fonction someTab prend un parametre
//     let somme = 0; // initialisation de la variable somme à 0
//     let i = 0; // initialisation de la variable i à 0
//     //  0 correspond a la premiere position du tableau
//     while (i < tableau.length) { // tant que i est plus petit que la taille du tableau
//         // on ajoute la valeur de la position i du tableau a la variable somme
//         somme = tableau[i] + somme;
//         i++; // incrementer i
//         // somme += tableau[i];
//     }
//     // a la fin de la boucle on retourne la somme
//     return somme;
// }

 

// let tab = [1, 2, 8, 5, 6];
// let resultat2 = someTab(tab);
// console.log(resultat2); // => affiche 22

 

// // eviter cette mauvaise maniere
// // let resultat3 = someTab([1, 6, 9]); // => 16 


// function maxTab(tableau) {​​​​​​​
//     let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
//     for (let i = 0; i < tableau.length; i++){​​​​​​​ // pour i allant de 0 a la taille du tableau
//         // comparer max de la valeur a la position i du tableau
//         if (max < tableau[i]) {​​​​​​​  // si max est plus petit
//             // on remplace la valeur de max par la valeur de la position i du tableau
//             max = tableau[i]; 
//         }​​​​​​​
//     }​​​​​​​
//     return max; // retourner max
// }​​​​​​​


// let tab1 = [5, 8, 3, 0];
// let resultat3 = maxTab(tab1);
// console.log(resultat3); // affiche => 8


    
// function maxTab(tableau) {​​​​​​​
//     let max = tableau[0]; // on considere le premier elemement comme etant le plus grand
//     for (let i = 0; i < tableau.length; i++){​​​​​​​ // pour i allant de 0 a la taille du tableau
//         // comparer max de la valeur a la position i du tableau
//         if (max < tableau[i]) {​​​​​​​  // si max est plus petit
//             // on remplace la valeur de max par la valeur de la position i du tableau
//             max = tableau[i]; 
//         }​​​​​​​
//     }​​​​​​​
//     return max; // retourner max
// }​​​​​​​


// function minTab(tableau) {​​​​​​​
//     let min = tableau[0]; // on considere le premier elemement comme etant le plus grand
//     for (let i = 0; i < tableau.length; i++){​​​​​​​ // pour i allant de 0 a la taille du tableau
//         // comparer max de la valeur a la position i du tableau
//         if (min > tableau[i]) {​​​​​​​  // si max est plus petit
//             // on remplace la valeur de max par la valeur de la position i du tableau
//             min = tableau[i]; 
//         }​​​​​​​
//     }​​​​​​​
//     return min; // retourner max
// }​​​​​​​



// function maxMinTab(tableau, c) {​​​​​​​
//     if (c == true) {​​​​​​​
//         return maxTab(tableau);
//     }​​​​​​​ else {​​​​​​​
//         return minTab(tableau);
//     }​​​​​​​
// }​​​​​​​



// constarray= [1, 12, 3, 67, 1, 23, 0, 87];
// constarray2= [1, 1, 2, 3, 4, 5];
// constarray3= [0];
// constarray4= ['never gonna', 'give you', 'up'];
// constarray5= ['never gonna', 'let you', 'down'];

// function order(tab){
//     let bool = true;
//     let tabb = [];
//     for (let i = 0; i <tab.length; i++){
//         tabb.push(tab[i]);
//     }
//     tabb.sort();
//     for (let i = 0; i < tab.length; i++){
//         if (tabb[i] == tab[i]){
//             bool = true;
//         }else{
//             bool = false;
//             break;
//         }
//     }
//     return bool;
// }
// console.log(order(constarray));
// console.log(order(constarray2));
// console.log(order(constarray3));
// console.log(order(constarray4));
// console.log(order(constarray5));

// function recerseWord1 (parem1){
//     const txt1 = parem1.split('').reverse().join(" ");
//     return txt1;
// }

// function recerseWord2 (parem2){
//     // const txt = parem.split('');
//     let retour2 = "";
//     for (var i = parem2.length -1; i >= 0; i--){
//         retou2r = retour2 + parem2[i];
//     }
//     return retour2;
// }

// function recerseWord (parem){
//     const txt = parem.split('');
//     let retour = "";
//     for (var i = txt.length -1; i >= 0; i--){
//         retour = retour + txt[i];
//     }
//     return retour;
// }
// console.log(recerseWord("bonjour"));



// constwords= ['s.e.têrp', 'sap',"setê'n",'suoV','ces','redoc','av','aç','eénna','etteC']


// var note = 14;
// var message = (note>15) ?"bien !":"mauvais";
// console.log(message);