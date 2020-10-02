diameter = 40;
bevægelse = 20;

function setup() {
  createCanvas(800, 800);
  Training=1;
}

function draw() {
  background(220);
  if(bevægelse == 20){
    gårModHøjre = true;
  }
  circle(bevægelse, 400, diameter);
var gårModVenstre

  if (gårModHøjre == true){
      bevægelse += 1;
  }
  else{
    bevægelse -= 1;
  }
  if (bevægelse == 780){
      gårModHøjre = false;
  }
  if (bevægelse == 20){
      gårModHøjre = true;
  }
  
}