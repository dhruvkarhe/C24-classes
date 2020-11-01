class Pig{
    constructor(x,y)
    {
        var options = {
            restitution:0.5,
            //friction:0.3
        }
        this.x = x;
        this.y = x;
        this.width = 50;
        this.height = 50;
        this.body = Bodies.rectangle(x,y,50,50,options);
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
        stroke("grey");
        fill("pink");
        rect(0,0, this.width,this.height);
        pop();
    }
}