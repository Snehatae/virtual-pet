var dog,sadDog,happyDog,firebase,feed,lastFed;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  database = firebase.database();

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feedbutton=createButton("feed the dog");
  feedbutton.position(700,95);
  feedbutton.mousePressed(feedDog);

  addFood=createButton("add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  drawSprites();
}

function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
}
else{
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
}
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
function addFood(){
foodS++
database.ref('/').update({
  Food:foodS
})

}