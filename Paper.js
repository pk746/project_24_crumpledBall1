class Paper {
	constructor(x,y,radius) {
		var options={
			isStatic:false,
			restitution:0.5, // i have tried with different values of restitution and density
			friction:0.5,
            density:1.0
        }

        this.body=Bodies.circle(x,y, radius, options);
        this.radius = radius;
		World.add(world, this.body);

    }
    
	display() {
			var pos=this.body.position;		

			push()
			translate(pos.x, pos.y);
			noStroke();
			fill("pink")
			ellipseMode(CENTER)
			ellipse(0,0,this.radius*2, this.radius*2);
			pop()
			
	}

}
