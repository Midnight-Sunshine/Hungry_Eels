class Obstacle {
  constructor(x, y, r, image) {
    this.pos = createVector(x, y);
    this.r = r;
    this.image = image;
  }

  show() {
    push();
    imageMode(CENTER);
    image(this.image, this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    pop();
  }
}
