var tower,tower_img;
var ghost,ghost_img;
var backgrnd,backgrnd_img;
var door,door_img;
var door_grp;
var climber,climber_img,climber_grp;
var gameState="play";

function preload()
{
  tower_img=loadImage("tower.png");
  ghost_img=loadImage("ghost-standing.png");
  door_img=loadImage("door.png");
  climber_img=loadImage("climber.png");
  
  door_grp=new Group();
  climber_grp=new Group();
}
function setup()
{
  createCanvas(displayWidth,displayHeight);
  tower=createSprite(displayWidth/3,displayHeight/2);
  tower.addImage("tower",tower_img);
  //tower.velocityY=1;
  
  ghost=createSprite(displayWidth/5,displayHeight/2);
  ghost.addImage("ghost",ghost_img);
  ghost.scale=0.4;
}
function draw()
{
  background("white");
  if(gameState==="play")
    {
  if(tower.y>400)
    {
      tower.y=300;
    }
  tower.velocityY=1;
  if(keyDown("right"))
    {
      ghost.x=ghost.x+3;
    }
  if(keyDown("left"))
    {
      ghost.x=ghost.x-3;
    }
  if(keyDown("space"))
    {
      ghost.velocityY=-5;
    }
  ghost.velocityY=ghost.velocityY+0.8;
  if(climber_grp.isTouching(ghost))
    {
      ghost.velocityY=0;
    }

    camera.position.x=displayWidth/2;
    camera.position.y=displayHeight/2;
  
  spawndoor();
  
  drawSprites();
    }
  if(gameState==="end")
    {
      text("Game Over",300,300);
    }
}

function spawndoor()
{
    if(frameCount%80===0)
      {
        door=createSprite(displayWidth/7,displayHeight/9);
        climber=createSprite(displayWidth/7,displayHeight/6);
        door.addImage("door",door_img);
        climber.addImage("climber",climber_img);
        door.x=Math.round(random(displayWidth/2-5,400));
        climber.x=door.x;
        door.velocityY=4;
        climber.velocityY=4;
        door.lifetime=600;
        climber.lifetime=600;
        door_grp.add(door);
        climber_grp.add(climber);
        ghost.depth=door.depth;
        ghost.depth+=1;
      }
   
}
