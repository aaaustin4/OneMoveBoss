
var font;


function preload(){
font = loadFont('img/W95FARegular.ttf');
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40);
}

function draw() {
  textSize(40);
  fill(255);
   text('You do a zillion damage!!!\nThen there is nothing. Just you, in the void, surrounded by fading boss particles, \nuntil even their faint light is gone.',width/22,height/12);
 fill(0);
  textSize(60);
  text('0',mouseX,mouseY);
 
}
