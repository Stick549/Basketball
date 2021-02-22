const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var bird;
var box1, box2, box3;
var paper, dust;
function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird(90, 690, 50, 50)
    ground = new Ground(600, 700, 2000, 20);
    box1 = new Box(1250 ,480, 200, 20)
    box2 = new Box(1150 ,340, 20, 320)
    box3 = new Box(1350 ,340, 20, 320)
    paper = loadImage("paper.png")
    dust = loadImage("dustbingreen.png")
    ball = loadImage("ball.jpg")
    bg = loadImage("background.jpg")
    hoop = loadImage("hoop.jpg")
    player = loadImage("190-1907276_transparent-tracy-mcgrady-png-basketball-player-transparent-background.png")
}

function draw(){
    background("white");
    Engine.update(engine);
    if (keyIsDown(UP_ARROW)){
        Matter.Body.applyForce(bird.body, bird.body.position, {x:0, y:-100})
    }
    if (keyIsDown(LEFT_ARROW)){
        Matter.Body.applyForce(bird.body, bird.body.position, {x:-100, y:0})
    }
    if (keyIsDown(RIGHT_ARROW)){
        Matter.Body.applyForce(bird.body, bird.body.position, {x:100, y:0})
    }
    ground.display();
    bird.display()
    //box1.display()
    box2.display()
    box3.display()
    imageMode(CENTER)
    image(bg, 750, 350, 1500, 700);
    image(hoop, box1.body.position.x, 350, 300, 300);
    image(ball, bird.body.position.x, bird.body.position.y, 150, 150);
    image(player, bird.body.position.x, 600, 200, 200);
}