var runner, runner_running;
var pathImage;
var path;

function preload(){
  runner_running = loadAnimation("runner-1.png", "runner-2.png");
  pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(200,400);
  
  path = createSprite(90,400);
  path.addImage(pathImage);
 
  runner = createSprite(20,350);
  runner.addAnimation("runner", runner_running);
  runner.scale = 0.05;
  runner.x = 50
  

  
}

function draw() {
  background(0);
  console.log(runner.x);

  if (path.y > 400) {
    path.y = ground.height/2;
  }
  runner.x = World.mouseX;

  drawSprites();
}
