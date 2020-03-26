function setup() {
    createCanvas(displayWidth/4, displayHeight/4);
   
}
function draw() {
    background(0, 0, 255);
    stroke(255, 255, 0);
    line(0, 0, width, height);
    fill(255, 0, 0);
    circle(width/2, height/2, 20);
}