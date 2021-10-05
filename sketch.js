let v=[];
let food=[];
let poison=[];
let debug;

function setup() {
  createCanvas(640, 360);
  for (var i=0;i<10;i++){
    var x=random(width);
    var y=random(height);
    v[i] = new Vehicle(x,y);

  }
  
  for(var i=0;i<40;i++){
    var x=random(width);
    var y=random(height);
    food.push(createVector(x,y));


  }
  for(var i=0;i<20;i++){
    var x=random(width);
    var y=random(height);
    poison.push(createVector(x,y));


  }
  debug=createCheckbox();


}

function draw() {
  background(51);

  if(random(1)<0.05){
    var x=random(width);
    var y=random(height);
    food.push(createVector(x,y));

  }

  if(random(1)<0.01){
    var x=random(width);
    var y=random(height);
    poison.push(createVector(x,y));

  }

 

  for(var i=0;i<food.length;i++){
    fill(0,255,0);
    noStroke();
    ellipse(food[i].x,food[i].y,8,8);
  }
  for(var i=0;i<poison.length;i++){
    fill(255,0,0);
    noStroke();
    ellipse(poison[i].x,poison[i].y,8,8);
  }

  // Call the appropriate steering behaviors for our agents
  for(var i=v.length-1;i>=0;i--){
    v[i].boundaries();
    v[i].behaviours(food,poison);
    v[i].update();
    v[i].display();

    var newVechile=v[i].clone();
      if(newVechile!= null){
      v.push(newVechile);
    }

    if(v[i].dead()){
      var x=v[i].position.x;
      var y=v[i].position.y;

      food.push(createVector(x,y));
      v.splice(i,1);
    }
      
    
    

    

  }
  

}