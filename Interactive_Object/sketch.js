let faces = [];
let numFaces = 4;

function setup() {
    let cnv = createCanvas(400, 400);
    cnv.parent("canvasWrapper");

    for (let i = 0; i < numFaces; i++) {
        faces.push(new Face(random(width), random(height)));
    }

}

function draw() {
    background(180);

    for (let i = 0; i < faces.length; i++) {
        faces[i].update();
        faces[i].display();
    }
    // if (frameCount>200){
    //     for (let i = 0; i < faces.length; i++) {
    //         faces[i].turnAngry();
    //     } 
    // }
}

class Face {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.offsetX = 0;

        this.angleForSineRadians = random(0,2*PI);

        this.normalColor = color(254, 221, 115);
        this.angryColor= color(240,92,22);

        this.c=this.normalColor;
        this.speed=random(0.01,0.1);
        this.age=0;
        this.ageToTurnAngry=random(15,55);

    }
    update() {
        this.offsetX = map(sin(this.angleForSineRadians), -1, 1, -20, 20);

        this.angleForSineRadians += this.speed;

        this.age+=0.2;
        // if(this.age>this.ageToTurnAngry){
        //     this.turnAngry();
        // }
    }
    display() {
        push();
        translate(this.x + this.offsetX, this.y);

        noStroke();
        fill(this.c);
        circle(0, 0, 50);
        fill(0);
        circle(-10, -10, 5)
        circle(10, -10, 5)
        ellipse(0, 10, 8, 9)
        text(round(this.age),0,0);

        pop();
    }
    turnAngry(){
        this.c=this.angryColor;
    }
    turnNormal(){
        this.c=this.normalColor;
    }
    checkIfClicked(){
        let distanceMouseFace=dist(this.x,this.y,mouseX,mouseY);
        if (distanceMouseFace<25){
            this.turnAngry();
        }
    }
}
function mousePressed(){
    faces.push(new Face(mouseX,mouseY));

}