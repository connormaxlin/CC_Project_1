// Tranquil: free from disturbance; calm.

var Y_AXIS = 1;
var X_AXIS = 2;
var c1, c2;

function setup() {
  createCanvas(800, 450);

}

function draw() {
  background(30);
  sky(mouseX);
  
  lines(mouseY);
  andStars(mouseY)
}

function sky(mouseX) {
  c1 = color(113,57,242);
  c2 = color(246,38,52);
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);
  background(30, 30, 30, mouseX/2.5);
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) { // Top to bottom gradient
    for (var i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == X_AXIS) { // Left to right gradient
    for (var i = x; i <= x + w; i++) {
      var inter = map(i, x, x + w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function lines(mouseY) {
	stroke(255, 255, 255, mouseY/2);
  point(30, 20);
}

function andStars(mouseY) {
	stroke(mouseY, mouseY, mouseY);
  point(30, 40);
}
