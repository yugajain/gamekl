class Game {
    constructor() {
        this.bg = createSprite(400, 200, 0, 0)
        this.ground = createSprite(400, 400, 900, 10)
        this.player = createSprite(30, 280, 20, 60)
        this.player.visible = false;
        this.ground.visible = false
        this.heart3 = createSprite(-65, -40, 20, 20)
        this.heart3.visible = true;
        this.bgimg = loadImage("images.jpg")
        this.bg.addImage(this.bgimg)
        this.bg.visible = false
        this.obstaclegroup = new Group();
        this.vaccineGroup = new Group();
        this.sangrp = new Group();
        this.maskImg = loadImage("mask.png")
        this.maskGroup = new Group()
        this.sc = 0
        this.virusImage = loadImage("virus.png")
        this.vaccineImage = loadImage("vaccine img.png")
        this.playerimg = loadImage("run1 (1).png")
        this.sanitizerImg = loadImage("sanitizer.png")
        this.heartimg = loadImage("heart.png")
        this.heart3.addImage(this.heartimg) 
        this.heart3.scale = 0.1
        this.player.setCollider("rectangle", 0, 0, 50, 110)
        this.player.debug = false;
        this.sanhand = createSprite(34,290,20,60)
        this.sanhandImg = loadImage("download.jpg")
        this.sanhand.addImage(this.sanhandImg)
        this.sanhand.scale = 0.1
        this.timer = 5
        this.sanhand.visible = false
        this.vaccinesCollected = 0
        
    }
    play(){
      //  this.bg.x = 400
      //  this.bg.y = 200;
      this.heart3.x = 65
      this.heart3.y = 40
      fill("black")
      textFont("Comic Sans Ms")
      textSize(15)
      text("Vaccines req: 2", 600, 50);
      text("Vaccines: " + this.vaccinesCollected, 600, 100);
      text("Other people saved: " + this.sc, 600,150)
      textSize(20)
      text("Dodge the virus.Collect masks,sanitizers and vaccines ",60,90)
        this.bg.visible = true

       this.player.visible = true;
        this.player.addImage(this.playerimg)
        this.player.scale = 0.7755
       
        this.player.collide(this.ground)
      this.ground.visible = false;
       
        
        this.ground.velocityX = -2;
         if (this.ground.x < 0) {
            this.ground.x = this.ground.width / 2;
        } 

        if (keyDown("space") && this.player.y >=350) {
            this.player.velocityY = -15;

        }

        this.player.velocityY = this.player.velocityY + 0.8
       
      this.obstacle();
      this.vaccine();
      this.touch();
    }



    obstacle() {
        if (frameCount % 70 === 0) {
            var obstacle = createSprite(700, 365, 50, 40);
            obstacle.velocityX = -4
            obstacle.debug = false;
            obstacle.x = Math.round(random(500, 800));
            obstacle.addImage(this.virusImage)
            obstacle.scale = 0.08
            obstacle.depth = this.player.depth
            this.obstaclegroup.add(obstacle)
            obstacle.lifetime = 1000
            obstacle.setCollider("circle", 0, 0, 140)
        }
    }
    vaccine() {
        if (frameCount % 2000 === 0) {
            var vaccine = createSprite(800, 350, 20, 50)
            vaccine.velocityX = -3
            //vaccine.x = Math.round(random(800,400))

            vaccine.addImage(this.vaccineImage)
            vaccine.scale = 0.3
            vaccine.depth = this.player.depth
            vaccine.setCollider("rectangle", 100, 0, 60, 120)

            this.vaccineGroup.add(vaccine)
        }
    }

    touch() {
        for (var i = 0; i < this.obstaclegroup.length; i++) {
            if (this.player.isTouching(this.obstaclegroup.get(i))) {
                this.heart3.destroy()
                this.ground.velocityX = 0
                this.obstaclegroup.setVelocityXEach(0)
                this.vaccineGroup.setVelocityXEach(0)
                this.maskGroup.setVelocityXEach(0)
                this.sangrp.setVelocityXEach(0) 
                this.player.velocityY = 0;
                textFont("Arial")
                textSize(20)
                text("You Failed At Saving The World. Refresh The Page To Try again", 200,300)
                

                /*  if(keyDown("space") && this.player.y >= 300) {
                    this.player.velocityY = 0;
                  }
                this.player.velocityY = this.player.velocityY + 0 */

            }
        }

        for (var o = 0; o < this.sangrp.length; o++) {
            if (this.player.isTouching(this.sangrp.get(o))) {
                this.sangrp.get(o).destroy()
                this.sc = this.sc+5
                this.obstaclegroup.destroyEach()
                
          

            }
        }

        for (var s = 0; s < this.vaccineGroup.length; s++) {
            if (this.player.isTouching(this.vaccineGroup.get(s))) {
                this.vaccinesCollected = this.vaccinesCollected +1
                this.vaccineGroup.get(s).destroy()
            }
        }

        for (var z = 0; z < this.maskGroup.length; z++) {
            if (this.player.isTouching(this.maskGroup.get(z))) {
                this.sc = this.sc + 10
                this.maskGroup.get(z).destroy()
            }
        }




    }

    sanitizers() {
        if (frameCount % 400 === 0) {
            var sanitizer = createSprite(800, 350, 20, 10)
            sanitizer.velocityX = -3
            sanitizer.addImage(this.sanitizerImg)
            sanitizer.scale = 0.2
            this.sangrp.add(sanitizer)

        }
    }

    mask() {
        if (frameCount % 200 === 0) {
            var mask = createSprite(800, 350, 20, 10)
            mask.velocityX = -4
            mask.addImage(this.maskImg)
            mask.scale = 0.2
            mask.setCollider("rectangle", 0, 0, 250, 200)
            this.maskGroup.add(mask)

        }
    }

    gameWin() {
        if (this.vaccinesCollected === 2) {
                this.heart3.destroy()
                this.ground.velocityX = 0
                this.obstaclegroup.setVelocityXEach(0)
                this.vaccineGroup.setVelocityXEach(0)
                this.maskGroup.setVelocityXEach(0)
                this.sangrp.setVelocityXEach(0)
                this.player.velocityY = 0;  
                this.obstaclegroup.destroyEach()
            textFont("Comic Sans Ms")
            textSize(20)
            text("You won!You have saved the world ", 400, 200)
        }
    }
}