var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite (200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.4;

  doorsGroup = new Group();
  climbersGroup = new Group ();
  invisibleBlockGroup = new Group ();
}

function draw() {
  background(200);
        if (gameState==="play"){
          if(keyDown("left_arrow")){
            ghost.x = ghost.x-3;
          }
        if (keyDown("right_arrow")){
          ghost.x=ghost.x+3;
        }  
        if (keyDown("space")){
          ghost.velocityY=-5;
        }  
        ghost.velocityY=ghost.velocityY+0.8; 
        if (climbersGroup.isTouching(ghost)){
          ghost.velocityY = 0;
        }
        if (climbersGroup.isTouching(ghost)){
          ghost.velocityY = 0
        }
        if (invisibleBlockGroup.isTouching(ghost)|| ghost.y > 600 ){
          ghost.destroy;
        }
        if(tower.y > 400){
          tower.y = 300
        }
          spawndoors();
          drawSprites();
}
  }
        if (gameState==="end"){
          text(" Game Over !",230,250);
        
        }
  
  
 

function spawndoors(){

  //write code here to spawn the doors in the tower

  if (frameCount%240===0){

    door = createSprite(200,-50);
    door.addImage(doorImg);
    door.velocityY = 1;
    door.lifetime = 800;
    door.x = Math.round(random(120,400));
    doorsGroup.add (door);

    climber = createSprite (200,10);
    climber.addImage(climberImg);
    climber.velocityY = 1;
    climber.x = door.x
    climber.lifetime = 800;
    climbersGroup.add (climber);
  
    ghost.depth = door.depth;
    ghost.depth+=1

    invisibleBlock = createSprite (200,50);
    invisibleBlock.width = climber.width
    invisibleBlock.height = 2
    invisibleBlockGroup.add(invisibleBlock);

    invisibleBlock.x = door.x
    invisibleBlock.velocityY = 1
    invisibleBlock.debug = true;
    //invisibleBlock.visible = false;
  }




}