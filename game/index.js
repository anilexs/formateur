new Pawnbox();
document.getElementById("new-game-btn").addEventListener('click', () => {
    counter = 0;
    let choice = document.getElementById("niveau").value;
    endGame = false;
    new GridGame(choice);
    let grid = document.getElementById("grid-game");
    grid.childNodes[counter].style.opacity = 1;
})

let game = document.querySelector("#play_btn");
game.addEventListener('click', function() {
    let found = 0;
    let grid = document.getElementById("grid-game");
    let USER_COLOR = grid.childNodes[counter].firstChild.childNodes;
    USER_COLOR.forEach((element, id) => {
        if(element.style.backgroundColor == RANDOM_COLOR[id]){
            found++;
            grid.childNodes[counter].childNodes[1].childNodes[id].style.backgroundColor = element.style.backgroundColor;
        }
    });
    
    if(!endGame){
        if(found == maxPawns){ 
            endGame = true;
        }
        if(counter < maxAttempts - 1){
            if(pawnMax == maxPawns){ 
                grid.childNodes[counter].style.opacity = 0.6;
                counter++;
                grid.childNodes[counter].style.opacity = 1;
                pawnMax = 0;
            }else{
                alert("vous devez jouer toutes les cages!");
            }
        }else{
            grid.childNodes[counter].style.opacity = 0.6;
            endGame = true;
        }
    }else{
        alert("veuillez recommencer une nouvelle partie!");
    }
})