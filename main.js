function setup() {
    createCanvas(windowWidth, windowHeight);
}

function windowResize(){
    resizeCanvas(windowWidth, windowHeight, false);
}

function draw(){
    // background(0, 0, 255);
    if(mouseIsPressed)
    {
        if(mouseButton === RIGHT)
        {
            background(0,0,255);
        }
        fill(random(255),random(255), random(255));
        circle(mouseX, mouseY, 200);
    }
}