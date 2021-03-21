class stone {
    constructor(x, y, radius) {
      var options = {
          isStatic : false,
          'restitution':0,
          'friction':0.5,
          'density':0.2,
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      this.image = loadImage("polygon.png");
      
      World.add(world, this.body);

      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 50,50);
      pop();
    }
  };
  