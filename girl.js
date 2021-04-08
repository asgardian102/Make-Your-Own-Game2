class Girl {
    constructor(x,y,width,height){
        var options={
            density:1.2
        }
        this.body=Bodies.rectangle(x,y,15,25,options)


        World.add(world,this.body)
        
    }
    display(){
        var pos=this.body.position
        rectMode(CENTER)
        rect(pos.x, pos.y,15,25 )
    }

}