var sandy = 0;
var sandy = 0;

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent("sketch-container");
  background(10, 5, 25);
}

function draw() {
  background(10, 5, 25);

  // --- STARFIELD (random rects as glinting stars) ---
  fill(210, 180, 255, 80);
  stroke(180, 150, 255, 60);
  strokeWeight(1);
  rect(random(0, 500), random(0, 500), 2, 2);
  rect(random(0, 500), random(0, 500), 3, 3);
  rect(random(0, 500), random(0, 500), 2, 2);

  // --- ARIA WAVE (your triangle — sound blast from Danishi) ---
  let waveColor = map(mouseX, 0, 500, 100, 255);
  fill(79, mouseX * 0.5, mouseY * 0.5, 120);
  stroke(200, 100, 255, 180);
  strokeWeight(2);
  triangle(150, mouseY - 20, 300, mouseY - 150, 400, mouseY - 150);

  // second echo wave slightly offset
  fill(120, 60, 200, 60);
  stroke(160, 80, 255, 100);
  triangle(160, mouseY, 310, mouseY - 130, 410, mouseY - 130);

  // --- POWER CORE (your ellipse — grows with sandy) ---
  // outer glow rings
  noFill();
  stroke(180, 80, 255, 40);
  strokeWeight(1);
  ellipse(250, 380, sandy + 80, sandy + 80);
  stroke(220, 120, 255, 30);
  ellipse(250, 380, sandy + 120, sandy + 120);

  // core
  stroke(220, 180, 255);
  strokeWeight(2);
  fill(180, 100, 255, 180);
  ellipse(250, 380, sandy, sandy);

  // inner bright center
  fill(255, 230, 255, 200);
  noStroke();
  ellipse(250, 380, sandy * 0.3, sandy * 0.3);

  // --- ENERGY THREAD (your line) ---
  stroke(180, 50, 220, 180);
  strokeWeight(3);
  line(0, 500, 500, 500 - sandy);

  stroke(220, 120, 255, 80);
  strokeWeight(1);
  line(0, 500, 500, 500 - sandy * 0.7);

  // --- TITLE TEXT ---
  noStroke();
  fill(220, 190, 255, 200);
  textFont("Courier");
  textSize(32);
  textAlign(CENTER);
  text("Danishi", 250, 60);

  fill(160, 120, 220, 160);
  textSize(11);
  text("The Abyssal Aria", 250, 82);

  // click instruction fades out as power builds
  let alpha = map(sandy, 0, 300, 180, 0);
  fill(180, 150, 255, alpha);
  textSize(10);
  text("click to charge", 250, 470);

  // power level indicator
  fill(200, 160, 255, 200);
  textSize(10);
  textAlign(LEFT);
  text("power: " + sandy, 10, 490);

  // --- MOUSE WAND (your mouse follower) ---
  noStroke();
  fill(255, 220, 255, 200);
  ellipse(mouseX, mouseY, 12, 12);

  // sparkle trail
  fill(200, 150, 255, 100);
  ellipse(mouseX + random(-8, 8), mouseY + random(-8, 8), 4, 4);
  fill(255, 255, 255, 80);
  ellipse(mouseX + random(-12, 12), mouseY + random(-12, 12), 3, 3);
}

function mousePressed() {
  if (sandy >= 300) {
    sandy = 0;
  } else {
    sandy = sandy + 10;
  }
}
