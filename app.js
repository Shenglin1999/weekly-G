function setup(){
    let myCanvas = createCanvas(1000, 1000);
    myCanvas.parent('myContainer');
    
    background(55);
}

function draw(){
    noFill();

    // The two parameters of the point() method each specify
    // coordinates.
    // The first parameter is the x-coordinate and the second is the Y
    stroke(255);
    point(width * 0.5, height * 0.5);
    point(width * 0.5, height * 0.25);
    stroke(255, 153, 0);
  rect(width * 0.25, height * 0.1, width * 0.5, height * 0.8);
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}
function variableEllipse(x, y, px, py) {
    let speed = abs(x - px) + abs(y - py);
    stroke(speed);
    ellipse(x, y, speed, speed);
  }
  

