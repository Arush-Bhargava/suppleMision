class box{
    constructor(x,y,width,height){
      var options = {
          'friction': 2.0,
          'density':1.0,
          'restitution':0.0
      }
      this.body=Bodies.rectangle(x,y,width,height,options);
      this.width= width;
      this.height= height;
      World.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      fill("red")
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width, this.height);
    }
}