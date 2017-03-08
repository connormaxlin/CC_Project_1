// Luminous: full of or shedding light; bright or shining, especially in the dark.

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
  c1 = color(113, 57, 242);
  c2 = color(246, 38, 52);
  setGradient(0, 0, width, height, c1, c2, Y_AXIS);
  background(30, 30, 30, mouseX / 2.5);
}

function setGradient(x, y, w, h, c1, c2, axis) { // Code from p5js.org Examples - https://p5js.org/examples/color-linear-gradient.html
  noFill();
  if (axis == Y_AXIS) { // Top to bottom gradient
    for (var i = y; i <= y + h; i++) { // For loop to mix the colors
      var inter = map(i, y, y + h, 0, 1); // Remapping the values between 0 and 1 
      var c = lerpColor(c1, c2, inter); // Blending two colors
      stroke(c); // Output
      line(x, i, x + w, i); // Moving down the canvas as this has noFill
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

function lines(mouseY) { //Bottom Lights
  stroke(255, 255, 255, mouseY / 2);
  for (var i = 10; i <= width; i += 10) { // horizon 1
    point(i, 399);
  }
  for (var i = 5; i <= width; i += 15) { // horizon 2
    point(i, 400);
  }
  var y1 = 397;
  for (var x = 100; x <= 145; x += 5) { // bridge pt.1
    point(x, y1 -= 3);
  }
  point(150, 367); // bridge pt.2
  point(155, 370);
  point(160, 373);
  point(165, 376);
  point(170, 378);
  point(175, 380);
  point(180, 382);
  point(185, 384);
  point(190, 386);
  point(195, 388);
  point(200, 389);
  point(205, 390);
  point(210, 391);
  point(215, 391);
  point(220, 391);
  point(225, 390);
  point(230, 389);
  point(235, 388);
  point(240, 386);
  point(245, 384);
  point(250, 382);
  point(255, 380);
  point(260, 378);
  point(265, 376);
  point(270, 373);
  point(275, 370);
  point(280, 367);
  var y2 = 364;
  for (var x = 285; x <= 330; x += 5) { // bridge pt.3
    point(x, y2 += 3);
  }
  for (var y = 400; y >= 320; y -= 5) { // Tower 1 pt.1
    point(460, y);
  }
  for (var x = 460; x <= 500; x += 5) { // Tower 1 pt.2
    point(x, 320);
  }
  for (var y = 400; y >= 320; y -= 5) { // Tower 1 pt.3
    point(500, y);
  }
  for (var y = 400; y >= 300; y -= 5) { // Tower 2 pt.1
    point(485, y);
  }
  for (var x = 485; x <= 530; x += 5) { // Tower 2 pt.2
    point(x, 300);
  }
  for (var y = 400; y >= 300; y -= 5) { // Tower 2 pt.3
    point(530, y);
  }
  for (var y = 400; y >= 260; y -= 5) { // Tower 3 pt.1
    point(520, y);
  }
  for (var x = 520; x <= 570; x += 5) { // Tower 3 pt.2
    point(x, 260);
  }
  for (var y = 400; y >= 260; y -= 5) { // Tower 3 pt.3
    point(570, y);
  }
  for (var y = 400; y >= 220; y -= 5) { // Tower 4 pt.1
    point(575, y);
  }
  for (var x = 575; x <= 615; x += 5) { // Tower 4 pt.2
    point(x, 220);
  }
  for (var y = 400; y >= 220; y -= 5) { // Tower 4 pt.3
    point(615, y);
  }
  for (var y = 400; y >= 250; y -= 5) { // Tower 5 pt.1
    point(590, y);
  }
  for (var x = 590; x <= 635; x += 5) { // Tower 5 pt.2
    point(x, 250);
  }
  for (var y = 400; y >= 250; y -= 5) { // Tower 5 pt.3
    point(635, y);
  }
  for (var y = 400; y >= 280; y -= 5) { // Tower 6 pt.1
    point(640, y);
  }
  for (var x = 640; x <= 670; x += 5) { // Tower 6 pt.2
    point(x, 280);
  }
  for (var y = 400; y >= 280; y -= 5) { // Tower 6 pt.3
    point(670, y);
  }
  var tri1 = 670;
  for (var y = 400; y >= 170; y -= 5) { // Tower 7 pt.1
    point(tri1+=0.5, y);
  }
    var tri1 = 693;
  for (var y = 170; y <= 400; y += 5) { // Tower 7 pt.2
    point(tri1+=0.5, y);
  }
}

function andStars(mouseY) { //Top Stars
  stroke(255, 255, 255, 230 - mouseY / 2);
  strokeWeight(2);
  point (random (0, 800), random (0, 200));
}
