const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var engine, world;
var bird1;
var ground,platform1,platform2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var stoneObj,launcherobject;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform1 = new Ground(477.5,300,250,20);
    platform2 = new Ground(847.5,225,200,20);
    box1 = new Box(450,245,50,50);
    box2 = new Box(505,245,50,50);
    box3 = new Box(560,245,50,50);
    box4 = new Box(395,245,50,50);

    box5 = new Box(422.5,190,50,50);
    box6 = new Box(477.5,190,50,50);
    box7 = new Box(532.5,190,50,50);

    box8 = new Box(505,135,50,50);
    box9 = new Box(450,135,50,50);
    
    box10 = new Box(477.5,80,50,50);

    box11 = new Box(902.5,170,50,50);
    box12 = new Box(847.5,170,50,50);
    box13 = new Box(792.5,170,50,50);

    box14 = new Box(820,115,50,50);
    box15 = new Box(875,115,50,50);
    
    box16 = new Box(847.5,60,50,50);

    stoneObj=new stone(150,250,15);

    launcherObject = new SlingShot(stoneObj.body,{x:150, y:250});
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   launcherObject.fly();
}

function keyPressed(){
	if (keyCode === 32){
		Matter.Body.setPosition(stoneObj.body, {x:150, y:250})
		launcherObject.attatch(stoneObj.body);
	}
}

function draw(){
    background("lightblue");
    Engine.update(engine);
    ground.display();
    platform1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    launcherObject.display()
    stoneObj.display()
    platform2.display()

    fill("black");
    textSize(30);
    text("Drag the Hexagonal Stone and Relese it, to launch it twoards the blocks",10,35);
}
