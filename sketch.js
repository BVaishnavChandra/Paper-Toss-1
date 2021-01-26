
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ;
var paperObject ;
var bin1, bin2 , bin3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
 ground = new Ground(600,390,1300,15);
 
 paperObject = new Paper(150,320,25);

 bin1 = new Dustbin(1100,318,15,100);
 bin2 = new Dustbin(1002,375,180,15); 
 bin3 = new Dustbin(904,318,15,100);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
textSize(26);
fill("white");
text("Crumpled ball-1" , 300 , 50);


ground.display() ;

paperObject.display() ;

bin1.display() ;
bin2.display() ;
bin3.display() ;

drawSprites();
 
}


function keyPressed(){
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:120,y:-125});
  }
}



