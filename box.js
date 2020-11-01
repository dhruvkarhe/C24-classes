class Box{
    constructor(x,y,width,height)
    {
        var options = {
            restitution:0.5,
            friction:0.5,
            density:1.0,
        }
        this.x = x;
        this.y = x;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(myWorld,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("purple");
        fill("yellow");
        rect(0,0, this.width,this.height);
        pop();
    }
}