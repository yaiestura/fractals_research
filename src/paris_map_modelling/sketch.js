
var tree;
var bg;
var max_dist = 50;
var min_dist = 5;

function preload() {
    bg = loadImage("resources/paris.jpg");
    tint(255, 126);
}

function setup() {
    createCanvas(800, 600);
    background(bg);
    tree = new Tree();
}

function draw() {
    tint(255, 126);
    background(bg);
    tint(255, 126);
    tree.show();
    tree.grow();
}

