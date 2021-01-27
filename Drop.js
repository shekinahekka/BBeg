class Drop {

  constructor(x, y,radius) {
      var options={
       restitution: 0.1,
       friction: 0.002
    };
    this.body = Bodies.circle(x, y,radius , options);
    //this.width = width;
    //this.height = height;
    this.radius = 5;
    World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    fill("darkBlue");
    rectMode(CENTER);
    circle(pos.x, pos.y, this.radius);
  }
   update(){
     if(this.body.position.y>400){
        Matter.Body.setPosition(this.body,{x: random(0,400),
        y: random(-10,460)
        });
      }
   }
}
