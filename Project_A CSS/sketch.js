let circles = [];
let numCircles = 10;
let angle = 0;
let radius = 1;
let radius1 = 1;
let circleAmplify = false;
let kidsAppear = false;
let r = 0;
let r1 = 1;
let alpha1 = 255;
let alpha2 = 255;
let alpha3 = 255;
let stage2Printed = false;
let startTime = 0;
let mapAngle = 0;
let sinValue;
function setup() {
  createCanvas(windowWidth, windowHeight);
  //create an array for the "kids"
  for (let i = 0; i < numCircles; i++) {
    let circle = createCircle();
    circles.push(circle);
  }
}

function draw() {
  background(0, 0, 10, 60);
  textSize(12);
  noStroke();
  translate(windowWidth / 2, windowHeight / 2);

  //create a circle that is transparent on the outside
  //and white in the inside (using the function lerpColor
  //https://p5js.org/zh-Hans/reference/#/p5/lerpColor)
  for (r = 0; r < radius; r++) {
    let c = lerpColor(color(255), color(255, 255, 255, 0), r / radius);
    fill(c);
    circle(0, 0, 2 * r);
  }
  // let this big circle get bigger if one clicks on the center
  if (circleAmplify == true) {
    radius += 1;
    if (radius > width / 2 && radius > height / 2) {
      radius += 0;
    }
  }
  //update and display the "kids" if one clicks on the center
  if (kidsAppear == true) {
    for (let i = 0; i < circles.length; i++) {
      updateCircle(circles[i]);
      displayCircle(circles[i]);
    }
  }
  //show the words and little starting "button" in the beginning
  //and leave a black continuing "button" in the middle after beginning
  if (circleAmplify == false) {
    fill(255);
    circle(0, 0, 10);
    text("where all the stories begin", -75, 20);
    text("click to begin/continue", -65, 40);
  } else {
    fill(0, 0, 40, alpha2);
    circle(0, 0, 10);
    fill(255);
    text("Put your mouse closer to the 'kids'!", -100, -height / 2 + 30);
  }
  if (circleAmplify == true) {
    startTime = millis(); 
  }

  if (startTime > 0 && startTime >= 25000) {
    nextStep();
  }
}
function mousePressed() {
  if (
    mouseX > windowWidth / 2 - 20 &&
    mouseX < windowWidth / 2 + 20 &&
    mouseY > windowHeight / 2 - 20 &&
    mouseY < windowHeight / 2 + 20
  ) {
    generateMoreKids();
    circleAmplify = true;
  }
}
function generateMoreKids() {
  for (let i = 0; i < numCircles; i++) {
    let circle = createCircle();
    circles.push(circle);
  }
  kidsAppear = true;
}
function createCircle() {
  let circle = {
    angle: random(360),
    angularSpeed: random(0.01, 0.05),
    radius: 2.5,
    radiusSpeed: random(1, 1.5),
    x: 0,
    y: 0,
  };
  return circle;
}
function updateCircle(circle) {
  circle.x = circle.radius * cos(circle.angle);
  circle.y = circle.radius * sin(circle.angle);

  circle.angle += circle.angularSpeed;
  circle.radius += circle.radiusSpeed;

  if (random(1) < 0.1) {
    if (circle.radius < width / 2 - 30) {
      circle.radius += circle.radiusSpeed;
    }
  }

  let distanceToMouse = dist(
    circle.x,
    circle.y,
    mouseX - windowWidth / 2,
    mouseY - windowHeight / 2
  );
  if (
    distanceToMouse < 20 &&
    (circle.x > 50 || circle.x < -50 || circle.y > 50 || circle.y < -50)
  ) {
    let angleToMouse = atan2(
      mouseY - windowHeight / 2 - circle.y,
      mouseX - windowWidth / 2 - circle.x
    );
    let moveSpeed = map(distanceToMouse, 0, 50, 10, 0);
    circle.x += cos(angleToMouse) * moveSpeed;
    circle.y += sin(angleToMouse) * moveSpeed;
  }
}

function displayCircle(circle) {
  if (circle.radius < radius) {
      fill(0,0,40);
  } else {
      fill(255);
  }
  ellipse(circle.x, circle.y, 5, 5);
}


function nextStep() {
  fill(0, 0, 0, alpha3);
  sinValue = sin(mapAngle);
  alpha3 = map(sinValue, -1, 1, 0, 180);
  mapAngle += 0.25;
  rect(-width / 2, -height / 2, width, height);
  alpha2 -= 3;

  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    if (circle.radius > 0) {
      circle.radius -= 3 * circle.radiusSpeed;
      if (circle.radius < 0) {
        circle.radius = 0;
        fill(0, 0, 30, 50);
        ellipse(0, 0, 2 * r1, 2 * r1);
        r1 *= 1.001;
      }
    }
  }
}
