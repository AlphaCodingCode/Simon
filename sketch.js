// Any global variables can be defined up here
let simonHistory = [];
let guesses = [];
let lightupSquare = 4; // 0 - 3 valid, 4+ invalid

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
    // Render
    drawBoard();
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
