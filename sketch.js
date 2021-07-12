const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1,box6;
var stone;
var stand;
function preload(){

}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
 ground= new Ground(200,390,400,20);
 stand=new  Ground(300,250,310,20)
 box1 = new Box(330,235,30,30);
 box2 = new Box(360,235,30,30);
 box3 = new Box(390,235,30,30);
 box4 = new Box(420,235,30,30);
 box5 = new Box(450,235,30,30);
 box6 = new Box(360,195,30,30);
 stone = new Stone(50,200,20);
 slingShot = new SlingShot(stone.body,{x:100,y:200});

}



function draw(){
    background(0);
    Engine.update(engine);
   ground.display();
 
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   stone.display();
   slingShot.display();
   stand.display();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}
