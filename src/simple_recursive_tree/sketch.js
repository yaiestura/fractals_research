let slider;
let angle = Math.PI / 6;
let limit;

function setup() {
    c = createCanvas(400, 400);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
    limit = 4;
}

function draw() {
    angle = slider.value();
    background(255, 255, 224);
    stroke(85, 107, 47);
    translate(200, height);
    branch(100);
}

function branch(length) {
    line(0, 0, 0, -length);
    translate(0, -length);
    if (length > limit){
        push();
        rotate(angle);
        branch(length * (2 / 3));
        pop();
        push();
        rotate(-angle);
        branch(length * (2 / 3));
        pop();
    }
}

function keyPressed() {
    if (keyCode === 115 || keyCode === 83) {
        saveCanvas(c,'FractalTree', 'jpg');
    }
    return false;
}