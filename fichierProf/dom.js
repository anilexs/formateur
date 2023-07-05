let madiv = document.getElementById("madiv");
let mic = document.getElementsByName("Michel");
let tag = document.getElementsByTagName("div");
let cls = document.getElementsByClassName("maclasse");
let selc = document.querySelector('div');
let all = document.querySelectorAll("div");
let input = document.querySelector("input[type='submit']");
console.log(input);

if (selc.hasAttributes()) {
    console.log("a au moins un attribut");
} else {
    console.log("pas d'attribut");
}

let img = document.querySelector('img');
img.setAttribute("src", "https://img.freepik.com/photos-premium/bebe-panda-mignon-humoristique-suspendu-du-bambou_410516-25873.jpg?w=200")