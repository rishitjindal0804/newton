class Rope {
 
    constructor(bodyA,bodyB,offsetX,offsetY){

this.offsetX=offsetX
this.offsetY=offsetY
        var options={
  isStatic:true,
bodyA:bodyA,
bodyB:bodyB,
pointB:{x:this.offsetX,y:this.offsetY}

 }
 this.pointB=this.pointB
this.rope=Constraint.create(options);
World.add(world,this.rope)
    }

display(){

    strokeWeight(5);
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y);
    
}
}
