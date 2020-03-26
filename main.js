let gCoinX;
let gCoinY;
let gDemiTaille;

function setup() {
    createCanvas(windowWidth, windowHeight);
    gDemiTaille = 50;
    gCoinX = windowWidth/2;
    gCoinY = windowHeight/2;
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
    function draw(){
        background(0)
        fill(255, 255, 255);
        
        if (dist(mouseX, mouseY, gCoinX+gDemiTaille, gCoinY+gDemiTaille/2) < (gDemiTaille+5)) {
            background(0);
            gCoinX = random(windowWidth-gDemiTaille*2);
            gCoinY = random(windowHeight-gDemiTaille);
            dessineMoiUnBouton(gCoinX, gCoinY, gDemiTaille*2);
        } else {
            dessineMoiUnBouton(gCoinX, gCoinY, gDemiTaille*2);
        }
    }

    function dessineMoiUnBouton(pX, pY,pTaille){

        let lButtonW = pTaille;
        let lButtonH = pTaille/2;
        let lTextSize = 32;
        let lText = "OK TP";
        let lTextWidth = textWidth(lText);

        fill(255,255,255)
        rect(pX, pY, lButtonW, lButtonH);
        fill(255,0,0);    
        textSize(lTextSize)    
        text(lText,pX+lButtonW/2-lTextWidth/2, pY+lButtonH/2+lTextSize/2);
    }