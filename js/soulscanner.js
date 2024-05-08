var pic;
var mouth;
var font;

function preload(){
font = loadFont('img/W95FARegular.ttf')
  pic = loadImage('img/eyes.gif')
  mouth = loadImage('img/CYAN-TOUNGE.gif')
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40);
}

function draw() {
  background(0);
  fill(306);
  text('Looks like the Boss has 2 weak points!\n1) her Cyan Tongue, which she sticks out every 30 seconds to taunt you.\n2) her True Eye, only visible with the Bajtech Eyedrops, \nwhich have a 3.5 second duration, so aim fast!',width/22,height/12);
  image(pic,width*(190/400), height/2.5, 500, 500);
  image(mouth,width*(80/400), height/2.5, 500,500);
}