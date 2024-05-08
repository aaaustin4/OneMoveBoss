var boss;
var font;

function preload(){
font = loadFont('img/W95FARegular.ttf');
  pic = loadImage('img/Floating-island-gif.gif');
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40);
}

function draw() {
  background(0);
  fill(306);
  text('This Hexapuff-branded bonus item swells from your pack like a marshmallow infestation! \nYou bounce on the doughy junk and flip through the air, \nentering the invisible portal 20 feet above the boss fight.\n\nThe bonus level is calm and grassy. \nYou fall asleep in the field of spinning power-ups, suspended in a blue nowhere sky.',width/22,height/12)
  image(pic,width/1.9, height/2.3, 600,600);
}