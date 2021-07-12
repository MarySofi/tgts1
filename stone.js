class Stone{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.5,
            friction:1.0,
            stifness:0.01,
            density:1.0
        }
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        this.image=loadImage("polygon.png")
        World.add(world,this.body)

    }

    display(){
        var pos=this.body.position
        imageMode(RADIUS)
        image(this.image,pos.x,pos.y,this.radius*2,this.radius*2)
    }
}