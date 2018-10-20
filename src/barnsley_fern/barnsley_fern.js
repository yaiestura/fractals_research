let probability;
let x = 0;
let y = 0;
let xw = 0;
let yw = 0;
let iteration = 100000;
let interval;

function setup() {
    createCanvas(500,500);
    noLoop();
}

function draw() {
    stroke(0,100,0);
    rect(0,0,500,500);

    interval = setInterval(function () {
        for (let i = 0; i < 200; i++) {
            doIteration();
        }

        if (!iteration) {
            clearInterval(interval);
            console.log('done')
        }
    }, 20);
}


function doIteration() {
    probability = randomProbability(0,100);

    if (probability <= 1) {
        xw = 0;
        yw = 0.16 * y;
    } else if (probability <= 8) {
        xw = 0.2 * x - 0.26 * y;
        yw = 0.23 * x + 0.22 * y + 1.6;
    } else if (probability <= 15) {
        xw = - 0.15 * x + 0.28 * y;
        yw = 0.26 * x + 0.24 * y + 0.44;
    } else {
        xw = 0.85 * x + 0.04 * y;
        yw = - 0.04 * x + 0.85 * y + 1.6;
    }

    x = xw;
    y = yw;
    rect(x * 50 + 250, -y * 50 + 500, 1,1);
    iteration--;
}

function randomProbability(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
