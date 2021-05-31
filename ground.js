class Ground{
    constructor(){
        this.body = createSprite(400, 390, 800, 10);
    }
    move(){

        this.body.velocityX = -2
    }
}