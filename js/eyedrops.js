var pic;
var font;

function preload(){
font = loadFont('img/W95FARegular.ttf');
  pic = loadImage('img/eyesmultiple.gif');
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40);
}

function draw() {
  background(0);
  fill(306);
  text('You see the Boss\'s weakpoint, but you also see what lives in the Void. \nThey\'ve been watching you. Enjoying the fight.\n\nYou hand the Boss what remains of the eyedrops.',width/22,height/12);
  image(pic,width*(150/400), height/2.5, 500, 500);
}