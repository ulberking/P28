const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Render = Matter.Render;
var myWorld, myEngine, box1, box2, box3;
var world;
var ground, paper, trash1, trash2, trash3;
var trash, trash_image, connect;

function preload() {
  trash_image = loadImage("dustbingreen.png");
}

function setup() {
  createCanvas(1600, 700);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  ground = new Ground(800, 695, 1600, 10);
  trash1 = new Box(1200, 685, 110, 10);
  trash2 = new Box(1150, 605, 10, 150);
  trash3 = new Box(1250, 605, 10, 150);
  paper = new Paper(700, 400, 25);
  connect = new Connection(paper.paper, { x: 700, y: 400 });

  Engine.run(myEngine);
}

function draw() {
  background("pink");
  ground.display();
  trash1.display();
  trash2.display();
  trash3.display();
  paper.display();
  image(trash_image, 1140, 525, 120, 170);
  connect.display();
}
function mouseDragged() {
  Matter.Body.setPosition(paper.paper, { x: mouseX, y: mouseY });
}
function mouseReleased() {
  connect.break();
}
