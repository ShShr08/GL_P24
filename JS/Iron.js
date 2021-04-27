class Iron{
    constructor(x,y,width,height){
    var options ={
        restitution:0.8,
        friction:4,
        density:30
    }
    this.x=x;
	this.y=y;
	this.width = 100
    this.height = 20
    this.body=Bodies.rectangle(this.x,this.y,width,height,options)
	World.add(world, this.body);

    }
    display(){
        var ironpos = this.body.position;
        push();
        translate(ironpos.x,ironpos.y);
        rectMode(CENTER)
		strokeWeight(3);
		stroke("black");
        fill("lightgrey");
        rect(this.x,this.y,width,height);
        pop();
    }
}