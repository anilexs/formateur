var tableau = [];
var random;
for (var i = 0; i < 5; i++) {
    random = Math.floor(Math.random() * 50);
    
    while (tableau.includes(random)) {
    random = Math.floor(Math.random() * 50);
  }
  
  tableau[i] = random;
}

  for (var i = 0; i < tableau.length - 1; i++) {
  var minIndex = i;

  for (var j = i + 1; j < tableau.length; j++) {
    if (tableau[j] < tableau[minIndex]) {
      minIndex = j;
    }
  }

  var temp = tableau[i];
  tableau[i] = tableau[minIndex];
  tableau[minIndex] = temp;
}


console.log(tableau);

