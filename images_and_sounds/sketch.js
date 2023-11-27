let karateChop;
let readyToChop=true;
function preload(){
    karateChope=loadSound("sounds/karate.m4a")
}
function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent("canvasWrapper");
    fruit1=new Fruit(width/2,height/2);
}
function draw(){
    background(0,50);
    image(backgroundImage,0,0,400,400);

    let distance = dist(pmouseX, pmouseY, mouseX, mouseY);
    if(mouseIsPressed == true){
    //distance between current mouse position and
    //mouse position in previous frame
    // let distance = dist(pmouseX, pmouseY, mouseX, mouseY);

    if(distance>30 && readyToChop == true){
        karateChop.play();
        readyToChop = false;
    }else if(distance<10){
        readyToChop = true;
    }
}

    fill(255);
    stroke(255);
    line(pmouseX, pmouseY, mouseX, mouseY);

    fruit1.display();
}
function mousePressed(){
    karateChop.play();
}
class Fruit{
    constructor(startX,startY){
        this.x=startX;
        this.y=startY;
    }
    display(){
        push();
        translate(this.x,this.y);
        circle(0,0,50);
    }
}