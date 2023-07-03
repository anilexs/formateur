var btn = document.getElementById("push");

var plus = document.getElementById("plus");
var moins = document.getElementById("moins");
var multipliet = document.getElementById("multipliet");
var division = document.getElementById("division");

var operater = "+";
plus.addEventListener('click', () => {
    operater = "+";
})
moins.addEventListener('click', () => {
    operater = "-";
})
multipliet.addEventListener('click', () => {
    operater = "*";
})
division.addEventListener('click', () => {
    operater = "/";
})
btn.addEventListener('click', () => {
    var nb1 = document.getElementById("nb1").value;
    var nb2 = document.getElementById("nb2").value;
    var resultat = document.getElementById("resultat");
    var resulta;
    if(operater == "+"){
        resulta = Number(nb1) + Number(nb2);
        resultat.value = resulta;
    }else if(operater == "-"){
        resulta = Number(nb1) - Number(nb2);
        resultat.value = resulta;
    }else if(operater == "*"){
        resulta = Number(nb1) * Number(nb2);
        resultat.value = resulta;
    }else if(operater == "/"){
        resulta = Number(nb1) / Number(nb2);
        resultat.value = resulta;
    }
})