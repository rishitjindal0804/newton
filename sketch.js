const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var ball,ball2,ball3,ball4,ball5,ball6;




function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();    
    world = engine.world;

    box1 = new Box(width/2,220,200,20);
   
   

    ground = new Ground(600,height,1200,40);



  ball = new Balls(520,400,30);
  ball2 = new Balls(550,400,30);
  ball3 = new Balls(580,400,30);
  ball4 = new Balls(610,400,30);
  ball5 = new Balls(640,400,30);
  ball6 = new Balls(670,400,30);

hold1 = new Rope(ball.body,box1.body,220,220)
hold2 = new Rope(ball2.body,box1.body,220,240)
hold3 = new Rope(ball3.body,box1.body,220,260)
hold4 = new Rope(ball4.body,box1.body,220,200)
hold5 = new Rope(ball5.body,box1.body,220,180)
hold6 = new Rope(ball6.body,box1.body,220,160)
    
}

function draw(){
    background("white");
    Engine.update(engine);
   
    box1.display();
    

    ground.display();
 
    ball.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    ball6.display();

   hold1.display();
   hold2.display();
   hold3.display();
   hold4.display();
   hold5.display();
   hold6.display();
 //   line(box1.body.x,box1.body.y,ball.body.x,ball.body.y);


}


