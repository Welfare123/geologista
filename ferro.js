class ferro{
constructor(x,y)
	{
	var options={
		retitution:0.8,
		friction:0.9,
		density:12
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y,80,50, options)
        this.width=80
        this.heigth=50
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;	
            var angle=this.body.angle	
			push()
			translate(pos.x,pos.y);
            rotate(angle)
			rectMode(CENTER)
			fill("brown");
			rect(0,0,this.width,this.heigth)

			pop()
	}

}