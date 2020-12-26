



export default class CardClass {
    constructor(id, textFR, textEN, difficulty, nbSip, nbPlyr, type, lifetime, lifecycle) {
        this.id = id;
        this.textFR = textFR;
        this.textEN = textEN;
        this.difficulty = difficulty;
        this.nbSip = nbSip;
        this.nbPlyr = nbPlyr;
        this.type = type;
        this.lifetime = lifetime;
        this.lifecycle = lifecycle;
    }

    // Getters
    getID(){return this.id;}
    getTextFR(){return this.textFR;}
    getTextEN(){return this.textFR;}
    getDifficulty(){return this.difficulty;}
    getNbSip(){return this.nbSip;}
    getNbPlayer(){return this.nbPlyr;}
    getType(){return this.type;}
    getLifetime(){return this.lifetime;}
    getLifecycle(){return this.lifecycle;}

    


}