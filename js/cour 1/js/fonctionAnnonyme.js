// ici on utilise une fonction traditionnelle
function rappel() {
    console.log("Ceci est une fonction de rappel")
}

 

setTimeout(rappel(), 2000);

 

// ici on utilise une fonction anonyme
setTimeout(function() {
    console.log("Ceci est une fonction de rappel")
}, 2000)