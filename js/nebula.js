
var font;
var bcolor;
function preload(){
font = loadFont('img/W95FARegular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
   colorMode(HSL);
  textSize(40);
}

function draw() {
   bcolor = map(mouseY,0,height,93,0);
  background(93,100,bcolor);
  fill(306);
  text('You inhale the prismatic gas. \nThe void ripples like phosphenes as rainbows stick to your lung walls.\nYou black out, happy to take a break from this problem.',width/22,height/12)
  
}