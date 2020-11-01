class Log{
    constructor(x,y,height,angle)
    {
        var options = {
            restitution:0.5,
            friction:0.5,
            density:1.0,
        }
        this.x = x;
        this.y = x;
        this.width = 25;
        this.height = height;
        this.body = Bodies.rectangle(x,y,25,height,options);
        Matter.Body.setAngle(this.body,angle);
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
        stroke("#635323");
        fill("#fcd053");
        rect(0,0, this.width,this.height);
        pop();
    }
}