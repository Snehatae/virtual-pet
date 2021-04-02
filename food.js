class Food{
constructor(){
this.foodstock=0
this.milkImg=loadImage("Milk.png");
}

display(){
    var x=80,y=100;
    imageMode(CENTER);

    if(this.foodstock!=0){
        for(var i=0;i<this.foodstock;i++){
         if(i%10==0){
        x=80;
        y=y+50;
         }
        image(this.milkImg,x,y,50,50);
        x=x+30;
        }
    }
 }

 getFoodStock(){
  var dbref =database.ref("foodStock");
  dbref.on("value",function(data){
      foodstock
  })
 }
}



