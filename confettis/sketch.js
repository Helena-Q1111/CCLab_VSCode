let confettis = [];
let numConfetti = 10;

let backgroundHue = 0;

function setup() {
    createCanvas(400, 400);



    colorMode(HSB);
    backgroundHue = random(0, 360);

}

function draw() {
  background(backgroundHue, 10, 190);
  if(mouseIsPressed==true){
    for(let i = 0; i < numConfetti; i++){
        confettis.push(new Confetti(mouseX,mouseY)) 
    }
}
  for(let i = 0; i < confettis.length; i++){
    confettis[i].update();
    confettis[i].display();
  } 
while(confettis.length>1000){
    let index=0;
    let numDelete=1;
    confettis.splice(index,numDelete);
}
}



class Confetti{
    constructor(startX, startY){
        this.x = startX;
        this.y = startY;
        this.size = random(2, 10);
        this.speedX = random(-2, 2);
        this.speedY = random(-1, -3);

        this.hue = random(0, 360);
    }
    update(){
        // apply speeds to position
        this.x+=this.speedX;
        this.y+=this.speedY;

        // slowly change speeds
        // y slowly turns downward (positive)
        this.speedY = this.speedY + 0.1;
        // x slowly turn towards 0
        this.speedX = this.speedX * 0.99;

    } 
    display(){
        push();
        translate(this.x, this.y);
            fill(this.hue, 255, 255);
            noStroke();
            circle(0, 0, this.size);
        pop(); 
    }
}
