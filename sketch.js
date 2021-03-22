
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer1,plane1,stone1,rubber1;
//function preload()
//{
	
//}

function setup() {
	 var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.
  hammer1 = new hammer(100,100);
      
	plane1 = new plane(400,height,800,50);
	
  stone1 = new Stone(200,680,80,80);

  rubber1 = new Rubber(300,680,4,PI/2);

  sand1 = new Sand(500,100,4,PI/2);
  sand2 = new Sand(82,82,4,PI/2);
  sand3 = new Sand(170,350,4,PI/2);
  sand4 = new Sand(450,65,4,PI/2);
  sand5 = new Sand(510,100,4,PI/2);
  sand6 = new Sand(650,100,4,PI/2);
  sand7 = new Sand(690,100,4,PI/2);
  sand8 = new Sand(75,100,4,PI/2);
  sand9 = new Sand(700,220,4,PI/2);
  sand10 = new Sand(500,50,4,PI/2);

  iron1 = new iron(350,300,70,40);

	//Engine.run(engine);
}


function draw() {
  
  background("red");
  //rectMode(CENTER);

  Engine.update(engine);

  hammer1.display();

  plane1.display();

  stone1.display();

  rubber1.display();

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  
  iron1.display();

 //drawSprites();
 
}



