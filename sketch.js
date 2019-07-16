// Any global variables can be defined up here
let simonHistory = [1, 0, 2, 3];
let guesses = [];
let lightupSquare = 4; // 0 - 3 valid, 4+ invalid
let simonsTurn = true;

let lightupDelay = 0;
let currentSimonIndex = 0;
let lightout = false;
let lightoutTimer = 0;

/*
    Code in the setup function will only be run once at the start of the animation
*/
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

/*
    The draw function is executed once per frame.
*/
function draw() {
    // Update
    // if it's a lights out turn wait 60 frames
    if (lightout && lightupDelay == 0) {
        lightoutTimer--;
        lightupSquare = 4;
        if (lightoutTimer == 0) {
            lightout = false;
        }
    } else {
        if (simonsTurn) {
            guesses = [];
            // if simon's history has an index, currentSimonIndex, light up that square for delay time
            if (simonHistory.length - 1 >= currentSimonIndex && lightupDelay == 0) {
                lightupSquare = simonHistory[currentSimonIndex];
                lightupDelay = 45;
                currentSimonIndex++;
                lightoutTimer = 45;
                lightout = true;
            } else if (simonHistory.length - 1 < currentSimonIndex && lightupDelay == 0) {
                // show the newly added square
                simonHistory.push(round(random(0, 3)));
                lightupSquare = simonHistory[simonHistory.length - 1];
                currentSimonIndex = 0;
                lightupDelay = 60;
                simonsTurn = false;
                lightoutTimer = 45;
                lightout = true;
            }

        }
        if (guesses.length > 0 && guesses.length == simonHistory.length) {
            simonsTurn = true;
            lightupDelay = 45;
        }
        lightupDelay = constrain(lightupDelay - 1, 0, 60);

    }

    // Render
    drawBoard();
}


function mouseClicked() {
    if (simonsTurn)
        return;
    // check which square was clicked, and add it to the guess array
    if (mouseX <= width / 2 && mouseY <= height / 2) {
        // 0
        guesses.push(0);
        lightupSquare = 0;
    } else if (mouseX <= width && mouseY <= height / 2) {
        // 1
        guesses.push(1);
        lightupSquare = 1;
    } else if (mouseX <= width / 2 && mouseY >= height / 2) {
        // 2
        guesses.push(2);
        lightupSquare = 2;
    } else {
        // 3
        guesses.push(3);
        lightupSquare = 3;
    }
    // check guesses so far match simonHistory
    for (let i = 0; i < guesses.length; i++) {
        if (guesses[i] != simonHistory[i]) {
            // wrong guess
        }
    }
    // guess was correct
}


function drawBoard() {
    // overlay board with dark rectangles for each

    // red square
    fill(255, 0, 0);
    rect(0, 0, width / 2, height / 2);
    // blue square
    fill(0, 0, 255);
    rect(width / 2, 0, width / 2, height / 2);
    // green square
    fill(0, 255, 0);
    rect(0, height / 2, width / 2, height / 2);
    // yellow square
    fill(255, 255, 0);
    rect(width / 2, height / 2, width / 2, height / 2);

    // darken squares
    fill(100, 100, 100, 200);
    if (lightupSquare != 0) {
        rect(0, 0, width / 2, height / 2);
    }
    if (lightupSquare != 1) {
        rect(width / 2, 0, width / 2, height / 2);
    }
    if (lightupSquare != 2) {
        rect(0, height / 2, width / 2, height / 2);
    }
    if (lightupSquare != 3) {
        rect(width / 2, height / 2, width / 2, height / 2);
    }
}
