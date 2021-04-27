const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stn
var irn


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Pl(600,height,1200,20)
    hammer = new Hmmr(10,100);
    stn = new ston(700,150,width,height)
    irn = new Iron(300,200,width,height);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    
    plane.display();
    hammer.display();
    stn.display();
    irn.display();
}
