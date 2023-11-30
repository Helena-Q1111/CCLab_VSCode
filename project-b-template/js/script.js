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
let audioPlayed = false;
let colors = [];
let notes = [];
let tracks = [37.5, 112.5, 187.5, 262.5, 337.5, 412.5, 487.5, 562.5];
let mySound;
let character;
let arms;
let legs;
let frontpage;
let speed=0;
let ypos=0;
let texts = [
  "Welcome to the music journey!","Have you played any instruments before?",
  "Here is a synthesizer in front of you",
  "You can play with it by \n pressing your mouse and dragging it",
  "Like this!",
  "click 1, 2, 3 or 4 on your keyboard \n to change the timbre!",
  "Like this!",
  "Have fun!",
];
let texts2=[
  "",
  "Look! A character has joined your journey",
  "Does it remind you of some pixel games \n of your childhood?",
  "Let's play a game together!",
  "Please lead her by reaching \n the position of the note",
  "when the note coincides \n with the colorful diamonds!",
  "Like this!",
  "Ready to start!",
  "3","2","1","go!"
]
let currentTextIndex = 0;
let currentTextIndex2=0;
let displayTime = 4300;
let displayTime2=3500;
let fadeDuration = 500;
let nextTime = 0;
let nextTime2=0;
let interactedOnce = false;
let pixelFont;
let backgroundAlpha=255;
let characterAlpha=0;
let exampleX=800;

function preload() {
  mySound = loadSound('Encounter.mp3');
  character=loadImage('character.png');
  arms=loadImage('arms.png');
  legs=loadImage('legs.png');
  frontpage=loadImage('frontpage.png');
  pixelFont=loadFont('css/PixelifySans-VariableFont_wght.ttf');
}



function setup() {
  createCanvas(800, 600);
  textSize(32);
  textFont(pixelFont);
  textAlign(CENTER, CENTER);
  nextTime = millis() + displayTime;
  osc = new p5.Oscillator();
  colors.push(color(255, 77, 77));
  colors.push(color(255, 136, 77));
  colors.push(color(255, 255, 77));
  colors.push(color(196, 255, 77));
  colors.push(color(77, 255, 77));
  colors.push(color(77, 255, 255));
  colors.push(color(77, 148, 255));
  colors.push(color(210, 77, 255));

  for (let i = 0; i < 27; i++) {
    let startX, startY, length;
    if (i === 0) {
      startX = width;
      startY = tracks[7];
      length = 150;
    }
    if (i === 1) {
      startX = width + 150 * i;
      startY = tracks[1];
      length = 150;
    }
    if (i === 2) {
      startX = width + 150 * i;
      startY = tracks[2];
      length = 150;
    }
    if (i === 3) {
      startX = width + 150 * i;
      startY = tracks[1];
      length = 150;
    }
    if (i === 4) {
      startX = width + 150 * i;
      startY = tracks[4];
      length = 150;
    }
    if (i === 5) {
      startX = width + 150 * i;
      startY = tracks[5];
      length = 150;
    }
    if (i === 6) {
      startX = width + 150 * i;
      startY = tracks[4];
      length = 450;
    }
    if (i === 7) {
      startX = width + 150 * i + 300;
      startY = tracks[7];
      length = 150;
    }
    if (i === 8) {
      startX = width + 150 * i + 300;
      startY = tracks[1];
      length = 150;
    }
    if (i === 9) {
      startX = width + 150 * i + 300;
      startY = tracks[2];
      length = 150;
    }
    if (i === 10) {
      startX = width + 150 * i + 300;
      startY = tracks[1];
      length = 150;
    }
    if (i === 11) {
      startX = width + 150 * i + 300;
      startY = tracks[4];
      length = 150;
    }
    if (i === 12) {
      startX = width + 150 * i + 300;
      startY = tracks[0];
      length = 150;
    }
    if (i === 13) {
      startX = width + 150 * i + 300;
      startY = tracks[1];
      length = 450;
    }
    if (i === 14) {
      startX = width + 150 * i + 600;
      startY = tracks[7];
      length = 150;
    }
    if (i === 15) {
      startX = width + 150 * i + 600;
      startY = tracks[1];
      length = 150;
    }
    if (i === 16) {
      startX = width + 150 * i + 600;
      startY = tracks[2];
      length = 150;
    }
    if (i === 17) {
      startX = width + 150 * i + 600;
      startY = tracks[1];
      length = 150;
    }
    if (i === 18) {
      startX = width + 150 * i + 600;
      startY = tracks[4];
      length = 150;
    }
    if (i === 19) {
      startX = width + 150 * i + 600;
      startY = tracks[5];
      length = 150;
    }
    if (i === 20) {
      startX = width + 150 * i + 600;
      startY = tracks[4];
      length = 450;
    }
    if (i === 21) {
      startX = width + 150 * i + 1100;
      startY = tracks[4];
      length = 450;
    }
    if (i === 22) {
      startX = width + 150 * i + 1300;
      startY = tracks[7];
      length = 450;
    }
    if (i === 23) {
      startX = width + 150 * i + 1500;
      startY = tracks[6];
      length = 100;
    }
    if (i === 24) {
      startX = width + 150 * (i - 1) + 1600;
      startY = tracks[5];
      length = 100;
    }
    if (i === 25) {
      startX = width + 150 * (i - 2) + 1700;
      startY = tracks[3];
      length = 100;
    }
    if (i === 26) {
      startX = width + 150 * (i - 3) + 1800;
      startY = tracks[4];
      length = 100;
    }

    notes.push(new Note(startX, startY, length));
  }
}
function draw() {
  background(255);


  if(interactedOnce == false){
    background(240);
    image(frontpage,320,200);
    text("press anywhere to start", 400, 300);
    return;
  }
  
  noStroke();
  for (let i = 1; i < 5; i++) {
    fill(220,220,220,backgroundAlpha);
    rect(0, 75 * (2 * i - 1), 800, 75);
  }
  // notesAppear();

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
  texts1Appear();

  if(millis()>111300){
    notesAppear();
  }
  if (millis()>77000){
    characterAppear();
    texts2Appear();
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
  constructor(startX, startY, length) {
    this.x = startX;
    this.y = startY;
    this.length = length;
  }

  update() {
    this.x -= 5.3;
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
    endShape(CLOSE);
    pop();
  }
}
function characterAppear(){
  let targetY = mouseY; 
  speed = map(abs(targetY - ypos), 0, height, 0, 40);
  
  if (targetY > ypos) {
    ypos += speed;
  } else {
    ypos -= speed;
  }
  let armsAngle = map(ypos, 0, height, PI, PI/2);
  let legsAngle= map(ypos,height,0,0,PI/4);
  tint(255,characterAlpha);
  push();
  translate(70,ypos+70);
  rotate(legsAngle+PI/8);
  image(legs,-5,0);
  rotate(2*PI-2*legsAngle);
  image(legs,5,0);
  pop();
  
  push();
  translate(70,ypos);
  rotate(armsAngle);
  image(arms,0,-10);
  rotate(2*PI-armsAngle);
  image(character,-90,-100);
  rotate(PI-armsAngle);
  image(arms,10,-10);
  pop();

  characterAlpha+=1;
  backgroundAlpha-=1;
}
function notesAppear(){
  for (let i = 0; i < notes.length; i++) {
    notes[i].update();
    notes[i].display();
  }

}
function texts1Appear(){
  if (millis() > nextTime) {
    currentTextIndex++;
    nextTime = millis() + displayTime;
  }

  let currentTime = millis() - nextTime + displayTime;

  if (currentTime < fadeDuration) {
    let alpha = map(currentTime, 0, fadeDuration, 0, 255);
    fill(0, alpha);
  } else if (currentTime > displayTime - fadeDuration) {
    let alpha = map(
      currentTime,
      displayTime - fadeDuration,
      displayTime,
      255,
      0
    );
    fill(0, alpha);
  } else {
    fill(0);
  }
  if (currentTextIndex === 4) {
    let currentTime = millis() -4 * (displayTime + fadeDuration);
    if (currentTime <= 200) {
      osc.freq(Eflat2);
      playSound();
      fill(255, 136, 77, 100);
      rect(0, 75, 800, 75);
    }
    if (currentTime > 200 && currentTime < 300) {
      osc.freq(D);
      playSound();
      fill(255, 255, 77, 100);
      rect(0, 150, 800, 75);
    }
    if (currentTime > 300 && currentTime < 400) {
      osc.freq(C);
      playSound();
      fill(196, 255, 77, 100);
      rect(0, 225, 800, 75);
    }
    if (currentTime > 400) {
      osc.freq(Bflat);
      playSound();
      fill(77, 255, 77, 100);
      rect(0, 300, 800, 75);
    }
  }
  if (currentTextIndex === 5) {
    mouseReleased();
  }
  if (currentTextIndex === 6) {
    let currentTime = millis() - 6 * (displayTime + fadeDuration);
    osc.setType("sawtooth");
    if (currentTime < 0) {
      osc.freq(Eflat2);
      playSound();
      fill(255, 136, 77, 100);
      rect(0, 75, 800, 75);
    }
    if (currentTime > 0 && currentTime < 100) {
      osc.freq(D);
      playSound();
      fill(255, 255, 77, 100);
      rect(0, 150, 800, 75);
    }
    if (currentTime > 100 && currentTime < 200) {
      osc.freq(C);
      playSound();
      fill(196, 255, 77, 100);
      rect(0, 225, 800, 75);
    }
    if (currentTime > 200) {
      osc.freq(Bflat);
      playSound();
      fill(77, 255, 77, 100);
      rect(0, 300, 800, 75);
    }
  }
  if (currentTextIndex === 7) {
    mouseReleased();
  }
  text(texts[currentTextIndex], width / 2, height / 2);
function characterAppear(){
  let armsAngle = map(ypos, 0, height, PI, PI/2);
  let legsAngle= map(ypos,height,0,0,PI/4);
  tint(255,characterAlpha);

  push();
  translate(70,ypos+70);
  rotate(legsAngle+PI/8);
  image(legs,-5,0);
  rotate(2*PI-2*legsAngle);
  image(legs,5,0);
  pop();
  
  push();
  translate(70,ypos);
  rotate(armsAngle);
  image(arms,0,-10);
  rotate(2*PI-armsAngle);
  image(character,-90,-100);
  rotate(PI-armsAngle);
  image(arms,10,-10);
  pop();

  backgroundAlpha-=1;
  characterAlpha+=1;
  if(backgroundAlpha<=0){
    backgroundAlpha=0;
  }
  if(characterAlpha>=255){
    characterAlpha=255;
  }
}

}
function texts2Appear(){
  if (millis() > nextTime2) {
    currentTextIndex2++;
    nextTime2 = millis() + displayTime2;
  }

  let currentTime2 = millis() - nextTime2 + displayTime2;

  if (currentTime2 < fadeDuration) {
    let alpha = map(currentTime2, 0, fadeDuration, 0, 255);
    fill(0, alpha);
  } else if (currentTime2 > displayTime2 - fadeDuration) {
    let alpha = map(
      currentTime2,
      displayTime2 - fadeDuration,
      displayTime2,
      255,
      0
    );
    fill(0, alpha);
  } else {
    fill(0);
  }
  text(texts2[currentTextIndex2], width / 2, height / 2);
  if(currentTextIndex2==5 || currentTextIndex2==6){
    
    push();
    translate(exampleX,tracks[1]);
    fill(0);
    beginShape();
    vertex(0, 0);
    vertex(8, -8);
    vertex(700, -8);
    vertex(708, 0);
    vertex(700, 8);
    vertex(8, 8);
    vertex(0, 0);
    endShape(CLOSE);
    pop();
    exampleX-=3.6;
  }
  if(currentTextIndex2==6){
    osc.freq(Eflat2);
    playSound();
    fill(255, 136, 77, 100);
    rect(0, 75, 800, 75);
  }
  if(currentTextIndex2==7){
    mouseReleased();
  }
}
function exampleNotedisplay(){
  let exampleNote=new Note (width,tracks[1],150);
  notes.push(exampleNote);
}
function mousePressed(){
  if (!audioPlayed) {
    mySound.play();
    audioPlayed = true;
  }
  interactedOnce = true;

}