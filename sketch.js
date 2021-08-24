
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new Ground(575, 600, 20, 120);
	rightSide = new Ground(725, 600, 20, 120);

	edges = createEdgeSprites();


	

	//Create the Bodies Here.
	ball = Bodies.circle(100, 200, 20, ball_options);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);

  ellipse(ball.position.x, ball.position.y, 20);

//   ball.bounceOff(edges);


  groundObj.show();
  leftSide.show();
  rightSide.show();

  drawSprites();
  keyPressed();
 
}

function keyPressed() {
	if(keyDown(UP_ARROW)) {
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:3, y: 3});
	}
}



