class Pendulum
{
constructor (x,y,color)
{
    var options={
        'restitution':1,
        'friction':0,
        'frictionAir':0.0,
        'inertia': Infinity,
        'slop':0,
      
     
    }
   this.color=color
    this.body=Bodies.circle(x,y,50,options)
    World.add(world,this.body);
}
display()
{ 
   
    var boby=this.body.position;
    push()
    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(boby.x,boby.y,50,50,this.color);
    pop()
  }

}