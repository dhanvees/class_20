//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//declaring variables
let engine;
let world;
var ball;
var ground;
var rock;
var wall;

function setup() {
  createCanvas(400,400);

  //creating engines
  engine = Engine.create();

  //creating world
  world = engine.world;
  
//assigning properties to the ball body
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   //assingning properties to the ground body
   var ground_options ={
     isStatic: true
   };
  

   //creating ground body
  ground = Bodies.rectangle(200,390,400,20,ground_options);

  //adding the body to world
  World.add(world,ground);

//creating ball body
  ball = Bodies.circle(100,10,20,ball_options);

  //adding the body to world
  World.add(world,ball);
  
 var rock_options = {
  restitution : 0.90,
  frictionAir : 0.01
 };

  rock = Bodies.circle(250,20,25,rock_options);

  World.add(world,rock);

  var wall_options = {
    isStatic : true
  };
  
  wall = Bodies.rectangle(300,200,200,20,wall_options);

  World.add(world,wall);
  //assigning midpoints
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);

  //updating engines
  Engine.update(engine);
  
  //displaying the created bodies
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(rock.position.x,rock.position.y,25);
  rect(wall.position.x,wall.position.y,200,20);
 
}

