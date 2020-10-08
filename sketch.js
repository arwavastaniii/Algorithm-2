var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(300, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  
  rect1 = createSprite(600, 400, 50, 50);
  rect1.shapeColor = "blue";
  rect1.velocityY = -3;

  rect2 = createSprite(600, 200, 50, 50);
  rect2.shapeColor = "blue";
  rect2.velocityY = 3;
}

function draw() {
  background(0,0,0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  bounceOff(rect1, rect2);
  
  drawSprites();
}