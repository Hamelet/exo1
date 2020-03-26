// function setup() {
//     createCanvas(displayWidth/4, displayHeight/4);
   
// }
// function draw() {
//     background(0, 0, 255);
//     stroke(255, 255, 0);
//     line(0, 0, width, height);
//     fill(255, 0, 0);
//     circle(width/2, height/2, 20);
// }
// let value = 0;
// function draw() {
//   fill(value);
//   rect(25, 25, 50, 50);
// }
// function mousePressed() {
//   if (value === 0) {
//     value = 255;
//   } else {
//     value = 0;
//   }
// }
function draw() {
    background(237, 34, 93);
    fill(0);
  
    if (mouseIsPressed) {
      ellipse(50, 50, 50, 50);
    } else {
      rect(25, 25, 50, 50);
    }
  
    print(mouseIsPressed);
  }