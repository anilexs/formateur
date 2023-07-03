// cette classe permet d'afficher les pions
class Pawnbox{
    constructor(){
        this.pawnBox = document.getElementById("pawn-box");
        this.pushPawn();
    }

    pushPawn(){
        COLOR.forEach(element => {
            let pion = new Pawn(element);
            this.pawnBox.appendChild(pion.div);

            pion.div.addEventListener('click', () => {
                if(!selectedColor){
                    pion.div.setAttribute("id", "activePawn");
                }else{
                    document.getElementById("activePawn").setAttribute("id", "innactivePawn");
                    pion.div.setAttribute("id", "activePawn");
                }
                selectedColor = element;
            });
        });
    }
}