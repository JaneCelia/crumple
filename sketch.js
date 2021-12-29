
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution: 0.3,
		friction: 0,
		density: 0.2
	}
	ball = Bodies.circle(250,100,50,ball_options)
	World.add(world,ball)
	Engine.run(engine);
	ground = new Ground(width/2,670,width,20)
	leftside = new Ground(1100,600,20,120);
	rightside = new Ground(700,600,20,120)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position,{x:100, y:-505})
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  leftside.display()
  rightside.display()
  ellipse(ball.position.x, ball.position.y,30,30)
  drawSprites();
 
}



