
const speedScale = 128
xSpeedo = 5;
ySpeedo = 3;
// opret flere variabler
let xSpeed = [xSpeedo, xSpeedo, xSpeedo, xSpeedo, xSpeedo];
let ySpeed = [ySpeedo, ySpeedo, ySpeedo, ySpeedo, ySpeedo];

let c;
let cFill;
let xKoordinater = [100, 200, 300, 400, 500];
let yKoordinater = [100, 100, 100, 100, 100];

// Definer en funktion der kan ændre fyld og stregfarve
function changeColor() {
  c = color(random(255), random(255), random(255));
  cFill = color(random(255), random(255), random(255));
  strokeWeight(10);
  stroke(c);
  fill(cFill);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  changeColor();
}

function draw() {
  background(c);

  rect(0, 0, width, height);
  
  let d = 120;
  let antalBolde = xKoordinater.length;

  for (let i=0 ; i<antalBolde ; i++){
    if (xKoordinater[i] > width - d / 2 || xKoordinater[i] < 0 + d / 2) {
      changeColor();
      xSpeed[i] = -xSpeed[i];
    }
  
    if (yKoordinater[i] > height - d / 2 || yKoordinater[i] < 0 + d / 2) {
      changeColor();
      ySpeed[i] = -ySpeed[i];
    }
  
    xKoordinater[i] = xKoordinater[i] + xSpeed[i];
    yKoordinater[i] = yKoordinater[i] + ySpeed[i];
  }

  // tegn en cirkel med centrum i (x, y) og diameter d
 for (let i=0; i<antalBolde ; i++){
    circle(xKoordinater[i], yKoordinater[i], d);
 }
  


  
}