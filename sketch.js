const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var pedra1
var ferro1
var borracha1


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    pedra1 = new pedra(700,320,100,100)
    ferro1 = new ferro(300,350)
    borracha1 = new Rubber(900,450,70)


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    pedra1.display();
    ferro1.display();
    borracha1.display();
    
 
}