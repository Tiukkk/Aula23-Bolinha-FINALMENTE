
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var angle1=60;
var angle2=60;
var angle3=60;
var block1, block2;
var rotator1, rotator2, rotator3;
var plane;
var particle1, particle2, particle3, particle4, particle5;

function setup() {
	createCanvas(700, 600);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic:true
	}

	var rotator_options={
		isStatic:true
	}

	var particle_options={
		restitution:0.4,
		friction:0.02
	}

	block1 = Bodies.rectangle(170,400,150,20,plane_options);
	World.add(world,block1);

	block2 = Bodies.rectangle(470,400,150,20,plane_options);
	World.add(world,block2);

	plane = Bodies.rectangle(350,600,700,20,plane_options);
	World.add(world,plane);

	rotator1 = Bodies.rectangle(350,200,150,20,rotator_options);
	World.add(world,rotator1);

	rotator2 = Bodies.rectangle(350,200,150,20,rotator_options);
	World.add(world,rotator2);

	rotator3 = Bodies.rectangle(350,200,150,20,rotator_options);
	World.add(world,rotator3);

	particle1 = Bodies.circle(350,100,10,particle_options);
	World.add(world,particle1);
	particle2 = Bodies.circle(350,80,10,particle_options);
	World.add(world,particle2);
	particle3 = Bodies.circle(350,60,10,particle_options);
	World.add(world,particle3);
	particle4 = Bodies.circle(350,40,10,particle_options);
	World.add(world,particle4);
	particle5 = Bodies.circle(350,20,10,particle_options);
	World.add(world,particle5);
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background("green");
  Engine.update(engine);

	
  ellipse(particle1.position.x, particle1.position.y, 20, 20);
  ellipse(particle2.position.x, particle2.position.y, 20, 20);
  ellipse(particle3.position.x, particle3.position.y, 20, 20);
  ellipse(particle4.position.x, particle4.position.y, 20, 20);
  ellipse(particle5.position.x, particle5.position.y, 20, 20);
	
  fill("red");
  rect(plane.position.x, plane.position.y, 700, 20);

  fill("red");
  rect(block1.position.x, block1.position.y, 150, 20);
  
  fill("red");
  rect(block2.position.x, block2.position.y, 150, 20);
  
	Matter.Body.rotate(rotator1,angle1);
	push();
	translate(rotator1.position.x, rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1+=0.2;

	Matter.Body.rotate(rotator2,angle2);
	push();
	translate(rotator2.position.x, rotator2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2+=0.6;

	Matter.Body.rotate(rotator3,angle3);
	push();
	translate(rotator3.position.x, rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3+=1;

  drawSprites();
 
}



