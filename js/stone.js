class Stone{
    constructor(bodyA, pointB){
        var options = {  
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.image = loadImage("sprites/stone.png");
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        this.stone= Constraint.create(options);
        World.add(world, this.stone);
    }

    fly(){
        this.stone.bodyA = null;
    }

    display(){
        var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
        pop()
    }
    
}