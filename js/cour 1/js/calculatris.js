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
    
})