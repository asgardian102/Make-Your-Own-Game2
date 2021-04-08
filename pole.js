class Pole{
    constructor(x,y,width,height){
        this.body=Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)
        this.width=width
        this.height=height
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height )
    }
    
}

