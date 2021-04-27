class Ston{
    constructor(x,y,width,height){
    var options ={
        restitution:0.8,
        friction:0.9,
        density:12
    }
    this.x=x;
	this.y=y;
	this.width = 50;
    this.height = 30
    
    this.body=Bodies.rectangle(this.x,this.y,width,height,options);
	World.add(world, this.body);

    }
    display(){
        var stonepos = this.body.position;
        push();
        translate(stonepos.x,stonepos.y);
        rectMode(CENTER)
		strokeWeight(3);
		stroke("black");
        fill("darkgrey");
        rect(this.x,this.y,width,height);
        pop();
    }
}