function setup() {
    //creates a canvas 600 pixels wide
    //and 400 pixels high
    createCanvas(600, 450);
}
function draw() {
    //sky blue background
    background(135, 206, 235);
    //sun in top right
    fill("yellow");//yellow  
  
    stroke("orange"); //orange outline 
  
    strokeWeight(15); //large outline    
  
    circle(580, 20, 100);
   
    //grass on bottom half
  
    stroke(0);//black outline
  
    strokeWeight(1);//outline thickness
  
    fill("green");
  
    rect(0, 250, 600, 200);
   
    fill("#46220f");
    rect(0,270,600,180);
    
    //emojis
    textSize(150)
    text("🏡", 200, 230) //flower
    textSize(30);
    text("🐞", 320, 160) //ladybug
    textSize(200)
    text("🌴", 15, 230)
}