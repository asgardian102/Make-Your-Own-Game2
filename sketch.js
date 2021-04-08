const Bodies=Matter.Bodies
const Engine=Matter.Engine
const World=Matter.World
function setup() {
 engine=Engine.create()
 world=engine.world 
  createCanvas(800,400);
 //ground = new Ground( xposition, yposition, width, height)
 // ground= new Ground ( canvas width/ 2,height or height -10 ,canvas width, 10 to 20)
 ground1=new Ground(400,390,800,20)

  pole1= new Pole(200,200, 50,200)
  //pole1.body.position.y= ground1.body.position.y-pole1.height/2

  pole2=new Pole(480,220,50,200)
 // pole2.body.position.y= ground1.body.position.y-pole2.height/2
 
  girl1=new Girl(360,240)

}

function draw() {
  Engine.update(engine)
  background("skyblue");  
  drawSprites();
  ground1.display();
  pole1.display()
  pole2.display()
  girl1.display()
  console.log(girl1.body.position)
}

function keyPressed(){
if(keyCode===32){
  Matter.Body.applyForce(girl1.body,girl1.body.position,{x:0,y:-20})
}
}

