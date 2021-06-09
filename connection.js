class Connection {
  constructor(a, b) {
    var connection_featurs = {
      bodyA: a,
      pointB: b,
      stiffness: 0.01,
      length: 5,
    };
    this.c = Constraint.create(connection_featurs);
    World.add(myWorld, this.c);
    console.log(this.c.pointB.x);
  }
  display() {
    if (this.c.bodyA != null) {
      var a = this.c.bodyA.position;
      var b = this.c.pointB;
      push();
      line(a.x + 10, a.y + 15, b.x + 10, b.y + 15);
      pop();
    }
  }
  break() {
    this.c.bodyA = null;
  }
}
