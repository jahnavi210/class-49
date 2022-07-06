var sp
var spImg,player,playerImg,e1,e2,e3,e1img,e2img,e3img
function preload(){
spImg = loadImage("space10.png")
playerImg = loadImage("enemy40.png")
e1img = loadImage("enemy10.png")
e2img = loadImage("enemy20.png")
e3img = loadImage("enemy30.png")
}


function setup(){
  createCanvas(400,400)  
  sp = createSprite(200,200,400,400)
  sp.addImage(spImg)
  sp.velocityY = 4
  sp.scale = 3
  

  player = createSprite(250,350,20,20)
  player.addImage(playerImg)
  player.x = mouseX
}

function draw(){
  background("white")
  player.x = mouseX
  if(sp.y > 600){
   sp.y = 200
  }
  
  enemy1()
  enemy2()
  enemy3()
  drawSprites()
}

function enemy1 (){
  e1 = createSprite(random(50,350),0,10,10)
  e1.addImage(e1img)
  e1.velocityY = 3
}

function enemy2 (){
  e2 = createSprite(random(50,350),0,10,10)
  e2.addImage(e2img)
  e2.velocityY = 3
}

function enemy3 (){
  e3 = createSprite(random(50,350),0,10,10)
  e3.addImage(e3img)
  e3.velocityY = 3
}