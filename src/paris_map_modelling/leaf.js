
function Leaf() {
  this.pos = createVector(random(width), random(height));
  this.reached = false;

  this.show = function() {
    fill(0);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 4, 4);
  }

}
