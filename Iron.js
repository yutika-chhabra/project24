class iron{
    constructor(x,y,width,height){
        var options = {
            'restitution' :0.5,
            'density' :2.0,
            'friction' :2.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        
        World.add(world,this.body)
        
    }

    display() {
        
       var  pos = this.body.position
       var angle = this.body.angle

        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        strokeWeight(4)
        stroke("red")
        fill("blue")
        rect(x,y,this.width,this.height)
        pop();
    }
}