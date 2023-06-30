// Sélectionnez l'élément par son ID
const element1 = document.getElementById('p');

// Définissez un tableau de couleurs
const colors = ['red', 'green', 'blue', `yellow`, `black`, `orange`].reverse();

// Définissez un index initial pour parcourir le tableau de couleurs
let colorIndex = 0;

// Définissez une fonction pour changer la couleur du texte
function changeColor() {
  // Récupérez la couleur correspondante à l'index actuel
  const color = colors[colorIndex];

  // Modifiez la couleur du texte de l'élément
  element1.style.color = color;

  // Incrémentez l'index pour passer à la couleur suivante
  colorIndex++;

  // Revenez au début du tableau si on atteint la fin
  if (colorIndex === colors.length) {
    colorIndex = 0;
  }
}

// Appelez la fonction `changeColor` toutes les 1 seconde (1000 millisecondes)
setInterval(changeColor, 1000);



// Sélectionnez l'élément par son ID
const element = document.getElementById('p');

// Définissez un tableau de couleurs de fond
const backgroundColors = ['red', 'green', 'blue', `yellow`, `black`, `orange`];

// Définissez un index initial pour parcourir le tableau de couleurs de fond
let backgroundColorIndex = 0;

// Définissez une fonction pour changer la couleur de fond
function changeBackgroundColor() {
  // Récupérez la couleur de fond correspondante à l'index actuel
  const backgroundColor = backgroundColors[backgroundColorIndex];

  // Modifiez la couleur de fond de l'élément
  element.style.backgroundColor = backgroundColor;

  // Incrémentez l'index pour passer à la couleur de fond suivante
  backgroundColorIndex++;

  // Revenez au début du tableau si on atteint la fin
  if (backgroundColorIndex === backgroundColors.length) {
    backgroundColorIndex = 0;
  }
}

// Appelez la fonction `changeBackgroundColor` toutes les 1 seconde (1000 millisecondes)
setInterval(changeBackgroundColor, 1000);