const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine,myWorld,box1,box2,box3,box4,box5,ground,pig1,console,log1,log2;

function setup() {
  createCanvas(1200,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  box1=new Box(500,320,50,50);
  box2=new Box(720,320,50,50);
  box3=new Box(500,240,50,50);
  box4=new Box(720,240,50,50);
  box5=new Box(600,160,75,75);
  ground=new Ground(600,400,1200,20);
  pig1=new Pig(600,350);
  pig2=new Pig(610,300);
  log1=new Log(610,300,220,PI/2);
  log2=new Log(610,220,270,PI/2);
  log3=new Log(550,150,200,PI/7);
  log4=new Log(700,150,200,-PI/7);
  
}

function draw() {
  background(0); 
  Engine.update(myEngine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();

  
}




