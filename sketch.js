function setup() {
  block1 = createSprite(100,390,180,10)
  block2 = createSprite(300,390,180,10)
  block3 = createSprite(500,390,180,10)
  block4 = createSprite(700,390,180,10)
  ball = createSprite(Math.round(random(20,750)),100,20,20)

  block1.shapeColor = ("blue")
  block2.shapeColor = ("red")
  block3.shapeColor = ("yellow")
  block4.shapeColor = ("green")

  ball.shapeColor = ("white")

  ball.velocityY = 6
  ball.velocityX = 8 
  createCanvas(800,400);
}

function draw() {
  background("black");  
  
if (ball.isTouching(block1)&& ball.bounceOff(block1)){
  ball.shapeColor = "blue"
}
if (ball.isTouching(block2)){
  ball.shapeColor = "red"
  ball.velocityX = 0
  ball.velocityY = 0
}
if (ball.isTouching(block3)&& ball.bounceOff(block3)){
  ball.shapeColor = "yellow"
}
if (ball.isTouching(block4)&& ball.bounceOff(block4)){
  ball.shapeColor = "green"
}



  drawSprites();
  edges = createEdgeSprites();
  ball.bounceOff(edges)

}