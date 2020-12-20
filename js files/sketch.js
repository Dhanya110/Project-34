
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roofObject;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
	canvas=createCanvas(windowWidth, windowHeight);
	engine=Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	
	bobObject1= new Pendulum(400,600,"orange");
	bobObject2= new Pendulum(500,600,"darkOrange");
	bobObject3= new Pendulum(600,600,"pink");
	bobObject4= new Pendulum(700,600,"darkOrange");
	bobObject5= new Pendulum(800,600,"orange");


	rope1= new Sling(bobObject1.body,{x:400,y:100})
	World.add(world,rope1)
	rope2= new Sling(bobObject2.body,{x:500,y:100})
	World.add(world,rope2)
	rope3= new Sling(bobObject3.body,{x:600,y:100})
	World.add(world,rope3)
	rope4= new Sling(bobObject4.body,{x:700,y:100})
	World.add(world,rope4)
	rope5= new Sling(bobObject5.body,{x:800,y:100})
	World.add(world,rope5)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0, 0, 128);
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 ;

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
	fill(255)
  textSize(40)
  text("NEWTON'S CRADLE",400,80)
  
   
}

function mouseDragged(){
	
		Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
	
}

