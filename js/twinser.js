var boss;
var font;

function preload(){
font = loadFont('img/W95FARegular.ttf');
  pic = loadImage('img/duplicate.gif')
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40);
}

function draw() {
  background(0);
  fill(306);
  text('"Mwah, Im here to cause trubbl! Doncha forget it!\"\nWhoops there was only a 1 in 100000 chance of spawning an evil twin but it happened! \n Maybe the Void Zone increases the chance of negative effects to your items?',width/22,height/12)
  image(pic,width/1.5, height/2, 500,500);
}