let probability;
let x = 0;
let y = 0;
let xw = 0;
let yw = 0;
let iteration = 120000;
let interval;

function setup() {
    createCanvas(500,500);
    noLoop();
}

function draw() {
    stroke(0, 100, 0);
    rect(0, 0, 640, 640);
    interval = setInterval(function () {
        
        for (let i = 0; i < 200; i++) {
            doIteration();
        }

        if (!iteration) {
            clearInterval(interval);
        }

    }, 50);
}

function doIteration() {
    probability = randomProbability(0, 100);
    
    if (probability <= 2) {
        xw = 0;
        yw = 0.25 * y - 0.4;
    } else if (probability <= 9) {
        xw = 0.035 * x - 0.2 * y - 0.09;
        yw = 0.16 * x + 0.04 * y + 0.02;
    } else if (probability <= 16) {
        xw = -0.04 * x + 0.2 * y + 0.083;
        yw = 0.16 * x + 0.04 * y + 0.12;
    } else {
        xw = 0.95 * x + 0.005 * y - 0.002;
        yw = -0.005 * x + 0.93 * y + 0.5;
    }
        x = xw;
        y = yw;
        rect(x * 50 + 150, -y * 50 + 450, 2, 1);
    iteration--;
}

function randomProbability(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
