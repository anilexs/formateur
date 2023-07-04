var resultat = document.getElementById("resultat");

var zero = document.getElementById("zero");
var virgul = document.getElementById("virgul");

var un = document.getElementById("un");
var deux = document.getElementById("deux");
var trois = document.getElementById("trois");
var adition = document.getElementById("adition");

var soustrere = document.getElementById("soustrere");
var six = document.getElementById("six");
var cinque = document.getElementById("cinque");
var quatre = document.getElementById("quatre");

var multipliet = document.getElementById("multipliet");
var neuf = document.getElementById("neuf");
var huit = document.getElementById("huit");
var set = document.getElementById("set");

var division = document.getElementById("division");
var modulo = document.getElementById("modulo");
var inverser = document.getElementById("inverser");
var reset = document.getElementById("reset");

var valu = "";
var operater = [];
// adition.style.background = "gray";

reset.addEventListener('click', () =>{
    valu = "";
    resultat.value = "resultat";
})
inverser.addEventListener('click', () =>{
    if(valu !== ""){
        valu = valu + "+/-";
        resultat.value= valu;
        operater.push("+/-");
    }
})
modulo.addEventListener('click', () =>{
    if(valu !== ""){
        valu = valu + "%";
        resultat.value= valu;
        operater.push("%");
    }
})
division.addEventListener('click', () =>{
    if(valu !== ""){
        valu = valu + "/";
        resultat.value= valu;
        operater.push("/");
    }
})


set.addEventListener('click', () =>{
    valu = valu + "7";
    resultat.value= valu;
})
huit.addEventListener('click', () =>{
    valu = valu + "8";
    resultat.value= valu;
})
neuf.addEventListener('click', () =>{
    valu = valu + "9";
    resultat.value= valu;
})
multipliet.addEventListener('click', () =>{
    if(valu !== ""){
        valu = valu + "*";
        resultat.value= valu;
        operater.push("*");
    }
})


//  ling 3
quatre.addEventListener('click', () =>{
    valu = valu + "4";
    resultat.value= valu;
})
cinque.addEventListener('click', () =>{
    valu = valu + "5";
    resultat.value= valu;
})
six.addEventListener('click', () =>{
    valu = valu + "6";
    resultat.value= valu;
})
soustrere.addEventListener('click', () =>{
    if(valu !== ""){
        valu = valu + "-";
        resultat.value= valu;
        operater.push("-");
    }
})

// ligne 4
un.addEventListener('click', () =>{
    valu = valu + "1";
    resultat.value= valu;
})
deux.addEventListener('click', () =>{
    valu = valu + "2";
    resultat.value= valu;
})
trois.addEventListener('click', () =>{
    valu = valu + "3";
    resultat.value= valu;
})
adition.addEventListener('click', () =>{
    if(valu !== ""){
        valu = valu + "+";
        resultat.value= valu;
        operater.push("+");
    }
})

// dernier ling
zero.addEventListener('click', () =>{
    if (valu == ("0")){

    }else{
        valu = valu + "0";
        resultat.value= valu;
    }
})
virgul.addEventListener('click', () =>{
    if(valu == ""){
        valu = valu + "0,";
    }else{
        valu = valu + ",";
    }
    resultat.value= valu;
})
resulta.addEventListener('click', () =>{
    if(valu === "123456789"){
        console.log("commant a tu u ce code ?");
    }
})