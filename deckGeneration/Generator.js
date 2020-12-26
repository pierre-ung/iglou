import CardClass from './CardClass.js';
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
    var cards = (shuffle(this.gerenateArray())).filter(c => c.getLifetime() == '0:0' && c.getLifecycle() == '0:0');
    var availiableCards = [...cards];
    var result = [];
    var sumDifficulty = 0;
    var currentDifficulty = 0;
    var currentDeckSize = 0;
    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        if (currentDeckSize > wantedDeckSize) break;

        currentDifficulty = sumDifficulty / (currentDeckSize + 1);
        var cardDifficulty = card.difficulty;
        var tooDifficult = (currentDifficulty - wantedDifficulty) > 0;
        /**
         * 2 cases :
         *  (*) current deck difficulty > wanted difficulty 
         *  (*) current deck difficulty < wanted difficulty
         */
        if ((tooDifficult && (currentDifficulty >= cardDifficulty))
            ||
            (!tooDifficult && (currentDifficulty < cardDifficulty))) {
            result.push(card);
            currentDeckSize++;
            sumDifficulty += cardDifficulty;
            availiableCards = availiableCards.filter(aCard => aCard.getID() != card.getID());
        }
    }

    console.log("Average = " + sumDifficulty / currentDeckSize);
    console.log("DeckSize = " + currentDeckSize);
    return result;
}

/**
 * Generate a complex game (With minigames for exemple)
 */
function generateComplexGame() {

}

export { cardsFile, generateSimpleGame, readCouple, coupleMax, coupleMin, gerenateArray };