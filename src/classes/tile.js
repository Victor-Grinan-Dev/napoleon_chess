export class Tile{
    constructor(id, posLeft, posTop, color='white', piece=null, isCenter=false, backgroundImage=null){
        this.id = id;
        this.posLeft = posLeft;
        this.posTop = posTop;
        this.color = color;
        this.isCenter = isCenter;
    }
};