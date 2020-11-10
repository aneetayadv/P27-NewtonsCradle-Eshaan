class rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY},
            length: 100
        }

        this.rope = Constraint.create(options);
        World.add(world,options) 

    }
display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(5);
        fill("brown")
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);

    }
}