
let angle = Math.PI / 6;
let limit = 4;

function setup() {
    c = createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(255, 255, 224);
    stroke(85, 107, 47);
    translate(200, height);
    branch(100);
}

function branch(length) {
    line(0, 0, 0, -length);
    translate(0, -length);
    
    if(length > limit){
        var branchLen = random(1, length);
        var thetaRandomness = Math.PI / 20;
        var theta = angle + random(-thetaRandomness, thetaRandomness);
        push();
        rotate(theta);
        branch(branchLen);
        pop();
        push();
        rotate(-theta);
        branch(branchLen);
        pop();
    }
}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas(c, 'FractalTree', 'jpg');
    }
    return false;
}

function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
}
