console.log("js is linked!");
let instanceOfTaxi;
let secondTaxi;
function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");
    instanceOfTaxi=new Taxi(100,200,1);
    secondTaxi=new Taxi(300,200,0.5);
}

function draw() {
  background(90, 120, 250);
  instanceOfTaxi.display();
  instanceOfTaxi.update();
  secondTaxi.display();
  secondTaxi.update();
}

class Taxi{
  constructor(startX,startY,s){
    this.x=startX;
    this.y=startY;
    this.scaleFactor=s;
    this.speed=random(-2,2);
    this.width=100
    this.col=[120,150,90];
  }
  display(){
    push()
    translate(this.x,this.y);
    scale(this.scaleFactor);
    fill(this.col[0],this.col[1],this.col[2]);
    rect(0,0,100,30);

    pop()
  }
  update(){
    this.x+=this.speed;
    if(this.x>width){
      this.x=-this.width+this.scaleFactor;
    }else{
      
    }
  }
}