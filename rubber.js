class Rubber{
    constructor(x,y,radius){
        var options = {
          'restitution' :0.3,
          'density' :0.1,
          'friction' :5,
        }

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
    }

    diaplay(){
        var pos = this.body.position;
        var angle = this.body.angle;
 
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("blue");
        fill("blue");
        ellipse(0,0,this.radius);
        pop();
    }
}