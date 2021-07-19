const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var wall
var wall1
var  ball1
var ball2
var ball3
var ball4
var ball6
var ball7 
var ball8
var ground
var roop
function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

wall = createSprite(1,300,150,200)
wall1 =createSprite (1450,300,200,200)
wall1 =createSprite (1400,300,200,200)
ball = createSprite(200,200,150);
rope = new Rope (6,{x:245,y:30});





ground =  new Ground(1,1500,40,20)
  frameRate(80);

}

function draw() {
  background(51);
  rect (wall.position.x,wall.position.y,200,200)
  rect (wall1.position.x,wall1.position.y,200,200)
  ellipse(ball.position.x,ball.position.y,150)
  
  roop.show()
  ground.show()
  Engine.update(engine);

}
