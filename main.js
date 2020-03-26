function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResize(){
    resizeCanvas(windowWidth, windowHeight, false);
}

// function draw(){
//     // background(0, 0, 255);
//     if(mouseIsPressed)
//     {
//         if(mouseButton === RIGHT)
//         {
//             background(0,0,255);
//         }
//         fill(random(255),random(255), random(255));
//         circle(mouseX, mouseY, 200);
//     }
// }
function draw() {
    background(0)
    fill(255, 255, 255);
    let lButtonW = 200;
    let lButtonH = 75;
    let lPosX = 20;
    let lPosY = 20;
    rect(lPosX, lPosY, lButtonW, lButtonH);
    fill(255,0,0);
    let lTextSize = 32;
    textSize(lTextSize)
    let lText = "OK TP";
    let lTextWidth = textWidth(lText);
    text(lText,lPosX+lButtonW/2-lTextWidth/2, lPosY+lButtonH/2+lTextSize/2);
    }