// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 10; // Decide the initial number of particles.

let bubbles = [];
let floatingBubbles = []; // 存储上下浮动的泡泡

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvasWrapper");
  colorMode(HSB);

  for (let i = 0; i < 10; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }

  for (let i = 0; i < 20; i++) {
    floatingBubbles[i] = new FloatingBubble(random(width), random(height));
  }
}

function draw() {
  for (let i = 0; i < height; i++) {
    let h = map(i, 0, height, 230, 200);
    let s = 100;
    let b = 30;
    stroke(h, s, b);
    line(0, i, width, i);
  }
  for (let i = 0; i < floatingBubbles.length; i++) {
    let p = floatingBubbles[i];
    p.update();
    p.display();
  }
  for (let i = 0; i < bubbles.length; i++) {
    let p = bubbles[i];
    p.update();
    p.display();
  }
  for (let i = bubbles.length-1; i >= 0; i--) {
        
    if(bubbles[i].onCanvas == false){
        bubbles.splice(i, 1);
    }

} 

}

class Bubble {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.y = startY;
    this.dia = random(30, 50);
    this.hue = random(180, 220);
    this.alpha = 255;
    this.Yspeed = random(-1, -0.2);
    this.Xspeed = random(-2, 2);
    this.Anglespeed = random(-1, 1);
    this.clicked = false;
    this.alpha = 255;
    this.onCanvas=true;
  }
  checkOutOfCanvas() {

    // vertical
    if (this.y <0) {
        this.onCanvas = false;
    }
    // horizontal
    if(this.x < 0 || this.x > width){
        this.onCanvas = false;
    }
}

  // methods (functions): particle's behaviors
  update() {
    this.x += this.Xspeed;
    this.y += this.Yspeed;
    this.Yspeed *= 1.03;
    this.Anglespeed *= 1.03;
    this.dia += 0.05;
    this.alpha -= 5;
  }

  display() {
    this.distance = dist(mouseX, mouseY, this.x, this.y);
    push();
    translate(this.x, this.y);
    noStroke();
    for (let r = 0; r < this.dia; r++) {
      let c = lerpColor(color(0, 0, 100), color(0, 0, 100, 0), 0.95);
      fill(c, 10);
      circle(0, 0, r);
    }

    rotate(this.Anglespeed / PI);
    for (let r = 0; r < this.dia; r++) {
      let d = lerpColor(color(0, 0, 0), color(0, 0, 0, 0), 0.995);
      fill(d, this.alpha);
      circle(-this.dia / 4, 0, 5);
    }

    pop();
    if (this.distance < 10) {
      this.clicked = true;
    }
  }
}

class FloatingBubble extends Bubble {
  constructor(startX, startY) {
    super(startX, startY);
    this.amplitude = random(10, 30);
    this.period = random(100, 300);
    this.angle = random(TWO_PI); 
    this.startX = startX; 
    this.startY = startY;
    this.hue2=random(200,230);
  }

  update() {
    this.angle += (TWO_PI / this.period);
    this.y = this.startY + sin(this.angle) * this.amplitude;
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke();

    

    for (let r = 0; r < this.dia; r++) {
      let c2 = lerpColor(color(this.hue2, 100, 50), color(this.hue2, 100, 50,0), 0.95);
      fill(c2, 10);
      circle(0, 0, r);
    }

    pop();
  }
}
function mousePressed() {
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    bubbles.push(new Bubble(mouseX, mouseY));
  }
  let removed = false; 
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].clicked == true) {
      bubbles.splice(i, 1);
      removed = true;
      break;
    }
  }
}