let osc;
let noteIndex=0;
let n;
let freq= 311.1269914;
const baseFrequency = 311.1269914; 
const semitoneRatio = 1.0594630943592953;

function setup() {
  createCanvas(400, 400);
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.amp(0.5);
  osc.start();


  playNextNote();
}

function draw() {
  background(220);
}

function playNextNote() {
    if (noteIndex==1 ||noteIndex==2||noteIndex==0||noteIndex==4||noteIndex==5){
    n=2
  }
  else if(noteIndex==3){
    n=3
  }
  freq= freq* pow(semitoneRatio,n);
  playNote(freq);
  noteIndex+=1;

  if (freq > 880) {
    noLoop();
  } else {
    setTimeout(playNextNote, 500);
  }
}

function playNote(freq) {
  osc.freq(freq);
  osc.amp(0.5, 0.1);
  osc.amp(0, 0.2, 0.1);
}
