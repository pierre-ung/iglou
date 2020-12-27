import CardClass from './CardClass.js';
import PLAYERLIST from '../playerInfo/PlayerList.js'
const cardsFile = require('./cards.json');

function readCouple(couple) {
    var tmp = couple.split(coupleSep);
    var fst = parseInt(tmp[0]);
    var scd = parseInt(tmp[1]);
    return { fst, scd };
}

const coupleMax = ({ fst, scd }) => Math.max(fst, scd);
const coupleMin = ({ fst, scd }) => Math.min(fst, scd);

function gerenateArray() {
    const file = cardsFile;
    var card, id, textFR, textEN, difficulty, nbSip, nbPlyr, type, lifetime, lifecycle;
    var toAdd;
    var result = [];
    //Begin at 1 to avoid exemple line
    for (var i = 1; i < file.length; i++) {
        card = file[i];
        id = card.id;
        textFR = card.textFR;
        textEN = card.textEN;
        difficulty = card.difficulty;
        nbSip = card.nbSip;
        nbPlyr = card.nbPlyr;
        type = card.type
        lifetime = card.lifetime;
        lifecycle = card.lifecycle;
        toAdd = new CardClass(id, textFR, textEN, difficulty, nbSip, nbPlyr, type, lifetime, lifecycle);
        result.push(toAdd);
    }
    return result;
}

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

/**
 * Generate a simple game (Only cards where lifetime && lifecycle = 0:0)
 * @param {*} wantedDifficulty 
 * @param {*} wantedDeckSize 
 */
function generateSimpleGame(wantedDifficulty, wantedDeckSize) {
    var cards = (shuffle(this.gerenateArray())).filter(c => c.getLifetime() == '0:0' && c.getLifecycle() == '0:0' && c.getNbPlayer() <= PLAYERLIST.playerList.length);
    var availiableCards = [...cards];
    var result = [];
    var sumDifficulty = 0;
    var currentDifficulty = 0;
    var currentDeckSize = 1;
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (currentDeckSize >= wantedDeckSize) break;

        currentDifficulty = sumDifficulty / (currentDeckSize + 1);
        var cardDifficulty = card.difficulty;
        var tooDifficult = (currentDifficulty - wantedDifficulty) > 0;
        /**
         * 2 cases :
         *  (*) current deck difficulty > wanted difficulty 
         *  (*) current deck difficulty < wanted difficulty
         */
        if ((tooDifficult && (cardDifficulty <= wantedDifficulty))
            ||
            (!tooDifficult && (cardDifficulty > wantedDifficulty))) {
            result.push(card);
            currentDeckSize++;
            sumDifficulty += cardDifficulty;
            availiableCards = availiableCards.filter(aCard => aCard.getID() != card.getID());
        }
    }

    // To fill the deck, select the ~-best sub-deck in availiable cards (heuristic) 
    var remaining = wantedDeckSize - currentDeckSize;
    var score;
    var bestCard;
    var tryCard;
    var tryScore;
    var cardDifficulty;

    if(remaining > 0 && availiableCards.length > remaining){
        for(var i=0; i<remaining; i++){
            bestCard = availiableCards[0];
            cardDifficulty = bestCard.getDifficulty();
            score = Math.abs(wantedDifficulty - ((sumDifficulty+cardDifficulty)/(currentDeckSize+1)))
            for(var j=0; j<availiableCards.length; j++){
                tryCard = availiableCards[i];
                cardDifficulty = tryCard.getDifficulty();
                tryScore = Math.abs(wantedDifficulty - ((sumDifficulty+cardDifficulty)/(currentDeckSize+1)));
                if(tryScore < score){
                    bestCard = tryCard;
                    score = tryScore;
                }
            }
            currentDeckSize++;
            sumDifficulty += bestCard.getDifficulty();
            result.push(bestCard);
            availiableCards = availiableCards.filter(aCard => aCard.getID() != bestCard.getID);
        }
    }
    


    console.log("Average = " + sumDifficulty / currentDeckSize);
    console.log("Size = " +  currentDeckSize);
    return result.sort((c1, c2) => c1.getDifficulty()-c2.getDifficulty());
}

/**
 * Generate a complex game (With minigames for exemple)
 */
function generateComplexGame() {

} 
66

export { cardsFile, generateSimpleGame, readCouple, coupleMax, coupleMin, gerenateArray };