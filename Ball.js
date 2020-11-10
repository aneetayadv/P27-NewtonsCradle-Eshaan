class Ball{
    constructor(x, y, r) {
        var options = {
          isStatic:false,
          restitution:1,
          friction:0,
          density:0.8
        }
        this.body = Bodies.circle(x, y, r/2, options);
        this.r = r;
        this.image = loadImage("Ball.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
}