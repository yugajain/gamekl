class Lab{
    constructor(){
        this.scientist = loadImage("person.png")
        this.base = createSprite(-400,-200,800,400)
        this.people = createSprite(200,200,50,100)
        this.imgbg = loadImage("lab.png")
        this.base.visible = false
        this.base.addImage(this.imgbg)
        this.people.visible = false
    }
    display(){
   //     this.people.x = 100;
     //   this.people.y = 200;
        this.base.visible = true
        //this.base.scale = 
        this.base.x = 400
        this.base.y = 200
        
        
        this.people.addImage(this.scientist)
    // people.shapeColor = "red"
        textSize(17)
        stroke("green")
        textFont("Comic Sans Ms")
        fill("black")
        text("A world famous scientist Dr.Drako Malfoy tried to make a strength potion.He drank it and collapsed.", 0, 50)
        text("The potion has created a virus constantly spreading and had infected other 200 people",10,85)
        text("Everyone must stay in their home. This case will be taken care by Mr.John Wick", 100, 320)
        stroke("orange")
        text("DIES*", 20,120)
        text("press'l' or click on the next button", 100,350)
    }

    update(state){
        gameState = state;
    }
    remove(){
        this.people.destroy();
        this.base.destroy()
    }

}
