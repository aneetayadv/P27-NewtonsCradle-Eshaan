class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){

        this.offsetX = offsetX
        this.offsetY = offsetY


        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x:this.offsetX, y:this.offsetY},
            stiffness:1.0
        }

        this.rope = Constraint.create(options);
        World.add(world,options) 

    }
display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        push();
        strokeWeight(4);
        stroke("pink");
        line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offsetY);
        console.log(pointA.x);
        pop();

    }
}