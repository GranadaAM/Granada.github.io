function setup() {
    createCanvas(800, 800);
  }
  
  function draw() {
    background(220);
    
    if (mouseX < 400 && mouseY < 400){
        circle(mouseX, mouseY, 30)
    }
    if (mouseX > 400 && mouseY < 400){
        circle(mouseX, mouseY, 60)
    }
    if (mouseX > 400 && mouseY > 400){
        text('xD', mouseX, mouseY)
    }
    if (mouseX < 400 && mouseY > 400){
        text('yo mama', mouseX, mouseY)
    }
  }