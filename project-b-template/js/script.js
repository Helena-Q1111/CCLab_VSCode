let Eflat1 = 311.1269914;
let F = 349.228240051;
let G = 391.99544565;
let Bflat = 466.16377302;
let C = 523.25114351;
let D = 587.32955033;
let Eflat2 = 622.2539828;
let F2 = 698.4564801; //I calculated the frequency of each note
let osc;
let oscType;
let isPlaying = false;
let colors = [];
let notes = [];
let tracks = [37.5, 112.5, 187.5, 262.5, 337.5, 412.5, 487.5, 562.5];
function setup() {
  createCanvas(800, 600);
  osc = new p5.Oscillator();
  pixelDensity(5);
  for (let i = 0; i < 8; i++) {
    let startY = 75 * i + 37.5;
    notes.push(new Note(startY));
  }
  colors.push(color(255, 77, 77));
  colors.push(color(255, 136, 77));
  colors.push(color(255, 255, 77));
  colors.push(color(196, 255, 77));
  colors.push(color(77, 255, 77));
  colors.push(color(77, 255, 255));
  colors.push(color(77, 148, 255));
  colors.push(color(210, 77, 255));
}

function draw() {
  background(255);
  fill(220);
  noStroke();
  for (let i = 0; i < notes.length; i++) {
    notes[i].update();
    notes[i].display();
  }
  for (let i = 1; i < 5; i++) {
    rect(0, 75 * (2 * i - 1), 800, 75);
  }
  // stroke(0.5);
  for (let j = 0; j < 8; j++) {
    fill(colors[j]);
    quad(
      30,
      30 + j * 75,
      37.5,
      37.5 + j * 75,
      30,
      45 + j * 75,
      22.5,
      37.5 + j * 75
    );
  }
  if (mouseIsPressed) {
    if (mouseY > 0 && mouseY < 75) {
      osc.freq(F2);
      playSound();
      fill(255, 77, 77, 50);
      rect(0, 0, 800, 75);
    }
    if (mouseY > 75 && mouseY < 150) {
      osc.freq(Eflat2);
      playSound();
      fill(255, 136, 77, 50);
      rect(0, 75, 800, 75);
    }
    if (mouseY > 150 && mouseY < 225) {
      osc.freq(D);
      playSound();
      fill(255, 255, 77, 50);
      rect(0, 150, 800, 75);
    }
    if (mouseY > 225 && mouseY < 300) {
      osc.freq(C);
      playSound();
      fill(196, 255, 77, 50);
      rect(0, 225, 800, 75);
    }
    if (mouseY > 300 && mouseY < 375) {
      osc.freq(Bflat);
      playSound();
      fill(77, 255, 77, 50);
      rect(0, 300, 800, 75);
    }
    if (mouseY > 375 && mouseY < 450) {
      osc.freq(G);
      playSound();
      fill(77, 255, 255, 50);
      rect(0, 375, 800, 75);
    }
    if (mouseY > 450 && mouseY < 525) {
      osc.freq(F);
      playSound();
      fill(77, 148, 255, 50);
      rect(0, 450, 800, 75);
    }
    if (mouseY > 525 && mouseY < 600) {
      osc.freq(Eflat1);
      playSound();
      fill(210, 77, 255, 50);
      rect(0, 525, 800, 75);
    }
  }
}
function playSound() {
  if (!isPlaying) {
    osc.start();
    isPlaying = true;
  }
}

function mouseReleased() {
  osc.stop();
  isPlaying = false;
}

function keyPressed() {
  if (key === "1") {
    oscType = "sine";
    osc.setType(oscType);
  }
  if (key === "2") {
    oscType = "square";
    osc.setType(oscType);
  }
  if (key === "3") {
    oscType = "triangle";
    osc.setType(oscType);
  }
  if (key === "4") {
    oscType = "sawtooth";
    osc.setType(oscType);
  }
}
class Note {
  constructor(startX, startY) {
    this.sequecne = 0;
    this.length = 150;
    this.x = width;
    this.y = tracks[0];
  }
  update() {
    this.x -= 5;
  }
  display() {
    push();
    fill(0);
    translate(this.x, this.y);
    scale(0.8);
    beginShape();
    vertex(0, 0);
    vertex(10, -10);
    vertex(this.length, -10);
    vertex(this.length + 10, 0);
    vertex(this.length, 10);
    vertex(10, 10);
    vertex(0, 0);
    endShape();
    pop();
  }
}
