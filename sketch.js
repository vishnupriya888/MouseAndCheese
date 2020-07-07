var mouse, mouseImg;
var edges;
var score=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var timer=60;
var house,houseImg;
var eat,eatImg;
var eatgroup;
function setup() {
  createCanvas(800, 600);
  mouse = createSprite(50,550);
  mouse.scale=0.15;
  mouse.addImage("mouse.png",mouseImg);
eatgroup=new Group();
}
function preload() {
  mouseImg=loadImage("mouse.png");
  eatImg=loadImage("cheese.png");
  houseImg=loadImage("house.png");
}

function draw() {
  background(houseImg);
  drawSprites();
  if(gameState===PLAY){
    timer=timer-0.05;
    textSize(25);
    text("TIME REMANING:"+Math.round(timer),500,30);
    text("score= " + score,50,30);
      edges=createEdgeSprites();
  mouse.collide(edges);
    
if(keyDown("UP_ARROW")){
  mouse.velocityY=-8; 
}
  if(keyDown("DOWN_ARROW")){
  mouse.velocityY=8; 
}
   if(keyDown("LEFT_ARROW")){
  mouse.velocityX=-8; 
}
   if(keyDown("RIGHT_ARROW")){
  mouse.velocityX=8; 
}
   cheese();

  if(eatgroup.isTouching(mouse)){
eatgroup.destroyEach(); 
mouse.scale+=0.05; 
    score++;
   }
    if(timer<0){
    gameState=END;   
       }
     }
  if(gameState===END){
   mouse.velocityX=0;
    mouse.velocityY=0;
    eatgroup.destroyEach();
     
     }
 
  
 
}
function cheese() {

  if(frameCount % 60===0){  
  eat =createSprite(random(50,750),200,5,5);
    eat.scale=0.1
  eat.addImage("cheese.png",eatImg);
 eat.y=random(50,550);
    eat.lifetime=50;
  eatgroup.add(eat);
    
}
}