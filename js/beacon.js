var x = 1500;
var speed =-3;
var font;
var car;

function preload(){
font = loadFont('img/W95FARegular.ttf');
  pic = loadImage('img/momscar.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40)
}

function draw() {
  background(0);
  fill(255);
   text('Your mom honks outside and you run over to the vehicle. \nShe shakes her big purple hair and says howdy!\n\nYou settle into the back seat and buckle up. \nTime to drive to Little Caesar\'s and get some cheezy pizza.',width/22,height/12)
   image(pic,x, height/1.3,300,300)
  
  x=x+speed
  
  if(x<-70){x=width/1.1}
}