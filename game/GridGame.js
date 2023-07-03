class GridGame{
    constructor(level){
        this.gridgame = document.getElementById("grid-game");
        this.drawGrid(level);
    }

    drawGrid(level){
        this.gridgame.innerHTML = "";

        maxAttempts = LEVELS[level].nbAttempts;
        maxPawns = LEVELS[level].nbPawns;
        RANDOM_COLOR = [];
        do{
            let i = Math.floor(Math.random() * COLOR.length);
            if(!RANDOM_COLOR.includes(COLOR[i])){
                RANDOM_COLOR.push(COLOR[i]);
            }
        }while(RANDOM_COLOR.length < maxPawns);
        console.log(RANDOM_COLOR);
        for(let i = 0; i < LEVELS[level].nbAttempts; i++){
            let p = new GridGameRaw(LEVELS[level].nbPawns)
            document.querySelector("#grid-game").appendChild(p.row);
        }
    }
}