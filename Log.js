class Log {
constructor (x,y,height,angle)

{
   var Options = {
    'restitution':0.8,
    'friction':1.8,
    'density':1.0,
 }
 

this.body = Bodies.rectangle(x,y,20,height,Options)
Matter.Body.setAngle(this.body, angle);
World.add(world,this.body);
this.height = height;
}

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push ();
    fill ("SADDLEBROWN");
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    rect (0,0,20,this.height);
    pop  ();
 
}




}