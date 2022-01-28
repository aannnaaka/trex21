var trex;

function preload(){
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}


function setup(){
  createCanvas(600,200)
  
//crear sprite del t-rex.
trex = createSprite(50,100,20,20);
trex.addAnimation("running",trex_running);
trex.scale = 0.5;
}

function draw(){
  background("black");
if(keyDown("space")){
  trex.velocityY = -10;
}
  
  drawSprites();

}
