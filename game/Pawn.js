// definir la class Pawn
class Pawn{
    constructor(color){
        this.div = document.createElement("div");
        this.div.className = "pawn";
        this.div.style.backgroundColor = color;
    }
};