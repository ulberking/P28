class Paper {
  constructor(x, y, r) {
    var paper_features = {
      restitution: 0.8,
      friction: 1,
    };
    this.paper = Bodies.circle(x, y, r, paper_features);
    World.add(myWorld, this.paper);
    this.r = r;
    this.wood_paper = loadImage("paper.png");
  }
  display() {
    push();
    translate(this.paper.position.x, this.paper.position.y);
    rotate(this.paper.angle);

    imageMode(CENTER);
    image(this.wood_paper, 0, 0, 50, 50);
    pop();
  }
}
