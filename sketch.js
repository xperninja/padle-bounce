var ball,ballimg,img,paddle;



function preload() {
  ballimg = loadImage('ball.png');
  img = loadImage('paddle.png');
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(20,200);
  ball.addImage("ball",ballimg);
  
  paddle = createSprite(380,200);
  paddle.addImage("paddle",img);

  ball.velocityX = random(4,8);
  ball.velocityY = random(-8,8);
}

function draw() {
  background(205,153,0);
   edges = createEdgeSprites();
    paddle.y = World.mouseY;
  ball.bounceOff(edges[0]);
    ball.bounceOff(edges[2]);
    ball.bounceOff(edges[3]);
  if ( ball.isTouching(paddle)) {
  ball.velocityX = random(-3,-8);
  ball.velocityY = random(-5,-2);
}
      
  if (ball.y >= 400) {
  ball.y = 200;
ball.x = 100; 
      ball.velocityX = random(2,8);
  ball.velocityY = random(-8,8);
  } 
  drawSprites();
  
}

  


