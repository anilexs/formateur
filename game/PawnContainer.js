class PawnContainer{
    constructor(parent){
        this.containerLeft = document.createElement("div");
        this.containerLeft.className = "pawn-container";
        parent.appendChild(this.containerLeft);

        this.containerLeft.addEventListener('click', function(){
            let rows = this.parentNode.parentNode.parentNode;
            if(!endGame){
                if(rows.childNodes[counter] == this.parentNode.parentNode){
                    // remonter jusqu'au grand parent de cet element
                    if(selectedColor){
                        if(this.style.backgroundColor == ""){
                            pawnMax++;
                        }
                        this.style.backgroundColor = selectedColor;
                    }else{
                        alert("choisir une couleur");
                    }
                }else{
                    alert("mauvaise rangee")
                }
            }else{
                alert("veuillez recommencer une nouvelle partie!");
            }
        })
    }
}


class PawnChecker{
    constructor(parent){
        this.containerRight = document.createElement("div");
        this.containerRight.className = "position-check";
        parent.appendChild(this.containerRight)
    }
}