function setup() {
    createCanvas(800, 800);
    Training=1;
  }
  
  function draw() {
    background(220);
    textSize(32);
    text('X=', 10, 30);
    text(mouseX, 55, 30);
    text('Y=', 10, 60);
    text(mouseY, 55, 60);
    noFill();
   
    strokeWeight(10);
    Torso=line(400, 350, 400, 500);
   
    strokeWeight(8);
    Leg1=line(400, 500, 340, 600);
    Leg2=line(400, 500, 460, 600);
   
    strokeWeight(6);
    UpperArm1=line(400, 355, 310, 355);
    UpperArm2=line(400, 355, 490, 355);
    LowerArm1=line(309, 355, 260, 300);
    LowerArm2=line(491, 355, 540, 300);
   
    fill(1);
    Foot1=ellipse(330, 606, 20, 10);
    Foot2=ellipse(470, 606, 20, 10);
   
    noFill();
    strokeWeight(3);
    Head=circle(400, 300, 90);
    fill(1);
    Eye1=circle(381, 286, 3);
    Eye2=circle(419, 286, 3);
    noFill();
    Mouth=arc(400, 320, 30, 20, QUARTER_PI, QUARTER_PI*3);
    fill(1);
    Biceps1=ellipse(355, 355, 35, Training);
    Biceps2=ellipse(445, 355, 35, Training);
  }
   function mousePressed(){
     Training +=1;
   }