
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 tree= new Tree(200,400,100,200)
 stone=new Stone(100,220,20,20)
 ground=new Ground(400,700,800,10);	


 
 
 
    
 
 
 
Engine.run(engine);
Engine.update(engine)
  
}


 function draw(){
  rectMode(CENTER);
	background(0);

 tree.display();
 stone.display();
ground.display();	




}



  




