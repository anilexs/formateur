const COLOR = ["deepskyblue", "purple", "yellow", "darkorange", "red", "springgreen"];
let selectedColor = null;
let counter = 0;
let maxAttempts = 0;
let maxPawns = 0;
let pawnMax = 0;
let endGame = false;
let RANDOM_COLOR = [];

const LEVELS = {
    EASY :{
        nbPawns : 4,
        nbAttempts : 7
    },
    MEDIUM:{
        nbPawns : 5,
        nbAttempts : 6
    },
    HARD:{
        nbPawns : 6,
        nbAttempts : 6
    }
}