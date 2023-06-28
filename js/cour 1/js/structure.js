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

var tableauFun = [1,2,3,4,5,6,7,8,9] 
function sommeTab(tableau){
    var num = 0;
    for(var i = 0; i < tableau.length; i++){
        num = num + tableauFun[i];
    }
    return num;
}

var resulta = sommeTab(tableauFun);
console.log(resulta);

