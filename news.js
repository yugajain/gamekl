class News {
    constructor(){
      //  this.reportingImg = createSprite(400, 250, 0, 0)
        this.reportingBg = createSprite(-400, -250,666,666)
        this.rep = loadImage("news.jpg")
        this.reporter = createSprite(-100, -130, 0, 0);

        
        
    }

    display(){
        stroke("black")
        fill("white")
        textFont("Comic Sans Ms")
        textSize(24)
        text("Game Rules and functions: ", 200,50)
        text("Press Space Key or Up Arrow to jump.", 150,100)
        text("To win Collect 2 vaccines", 236, 150)
        text("Collect ")

    //   this.reportingImg
     this.reportingBg.addImage(this.rep)
       this.reporter.x = 100;
       this.reporter.y = 130;
       this.reportingBg.x = 400
       this.reportingBg.y = 250
        this.reporter.addImage(reporterImg)
        this.reporter.scale = 0.7

    }
    remove(){
        this.reporter.destroy();
        this.reportingBg.destroy()
    }
}