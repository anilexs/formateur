class GridGameRaw {
    constructor(pawns){
        this.row = document.createElement('div');
        this.row.className = "grid-game-row";

        this.pawnLeft = document.createElement("div");
        this.pawnLeft.className = "grid-game-row-left";

        this.pawnRight = document.createElement("div");
        this.pawnRight.className = "grid-game-row-rigth";

        this.row.appendChild(this.pawnLeft);
        this.row.appendChild(this.pawnRight);

        this.drawLeft(this.pawnLeft, pawns);
        this.drawRight(this.pawnRight, pawns);
    }

    drawLeft(parent, pawns){
        for(let i = 0; i < pawns; i++){
            // let e =  new PawnContainer(parent)
            new PawnContainer(parent);
        }
    }

    drawRight(parent, pawns){
        for(let i = 0; i < pawns; i++){
            new PawnChecker(parent);
        }
    }
}