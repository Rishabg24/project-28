class Stone{
constructor(){
var options={
'isStatic':false,
'restitution':0,
'friction':1,
'density':1.2
}
this.image=loadImage("sprites/rock.png");
    
}

display(){

image(this.image,10,20)


}
}