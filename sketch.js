var gameState, canvas, lab
var ratioBase
var next, next1, next2
var nextImg
var reportingBgImg,reportingImg ,reporter, reporterImg
var gameState2Img
var heart1, heart2, heart3, maingame
var score, flag =1;

function preload() {
  nextImg = loadImage("Untitled.png")
  reportingBgImg = loadImage("news.jpg")
  reporterImg = loadImage("images-removebg-preview.png")
  gameState2Img = loadImage("gamestate 2.jpeg")
  manimg = loadImage("person.png")
  
}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight);
  gameState = 0
  lab = new Lab()
  maingame = new Game();
  news = new News();
  score = 0
  next =  createSprite(-700, -350, 100,50);
  next1 =  createSprite(-700, -350, 100,50);
  man = createSprite(-999, -999, 10,20)
  

}

function draw() {
  background(0);
  drawSprites();
  if(gameState === 0){
    lab.display();
    next.x = 100;
    next.y = 200;
    man.x = 400
    man.y = 200
    man.addImage(manimg)
    next.scale = 0.5
    next1.scale = 0.5
    next.addImage(nextImg)
    if(mousePressedOver(next)){
      gameState = 1;
    } 
    if(keyDown("l")){
      gameState = 1
    }
  }
  else if(gameState === 1){
    lab.remove();
    news.display();
    next.destroy();
    man.destroy()
    next1.x = 700;
    next1.y = 150;
    next1.addImage(nextImg)
    if(mousePressedOver(next1)){
      gameState = 2;
    } 
    if(keyDown("enter")){
      gameState = 2
    }
  }
  else if(gameState === 2){
    news.remove();
    next1.destroy();

    maingame.play();
  
    
 
 
  
    maingame.sanitizers()
    maingame.mask()
    maingame.gameWin()
  
  }

 
 /*  if(gameState === 0){
    lab.display()
    next = createSprite(700, 350, 100, 50)
    next.addImage(nextImg)
    if(mousePressedOver(next)){
      gameState = 1
    }
  }
  else if(gameState === 1){
  //  ratioBase = createSprite(400, 200, 800, 400)
 
    next1 = createSprite(700, 100, 100, 50)
    next1.addImage(nextImg)
    if(mousePressedOver(next1)){
      gameState = 2
    }
  }
  else if(gameState === 2){
    text("Game Rules and virus prevention tips", 200, 50)
    next1.destroy();
    reporter.destroy();
    reportingImg.addImage("bg",gameState2Img)
    reportingImg.scale = 1.7
    
    text("1 :don't come in contact with the virus particles", 200, 100)
    text("2: don't shake hands with other people",200, 150)
    text("3. collect all the vaccines and sanitizers",200, 200)
      text("4. collect 1000 vaccines to win the game",200,250 )
      text("5: use sanitizers and masks for bonus points",200,300)
      
      next2 = createSprite(700, 150, 100, 50)
      next2.debug = true
    //next2.addImage(nextImg)
    if(mousePressedOver(next2)){
      gameState =  3

    }
  }
  else if(gameState === 3){
    next2.destroy();
  } */
  

   
    }