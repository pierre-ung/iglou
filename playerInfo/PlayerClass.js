export default class PlayerClass{
    constructor(id, name, avatar_id){
        this.id = id;
        this.name = name;
        this.avatar_id = avatar_id;
    }

    //Getters
    getID(){return this.id}
    getName(){return this.name}
    getAvatarID(){return this.avatar_id}
}