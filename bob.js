class Bob {
  constructor(x,y,diameter) {
    var options = {
      'isStatic': true,
      'restitution':0.8,
      'friction':1,
      'density':1.2   
    }
    this.body = Bodies.circle(x, y,diameter,options);
    this.diameter = diameter;
    World.add(world, this.body);
  }

  display(){
    push();
    var pos = this.body.position;
    stroke("black");
    strokeWeight(1.25);
    fill("aqua");
    circle(pos.x,pos.y,this.diameter);
    pop();
     
  }
}