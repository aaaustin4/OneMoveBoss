var boss;
var font;

function preload(){
font = loadFont('img/W95FARegular.ttf');
  pic = loadImage('img/gltizyshop.gif');
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40);
}

function draw() {
  background(0);
  fill(306);
  text('This one has an \nIceShroom Broth Potion (75 HP), \na KittenChild Cupcake, \nand a GunMetal Banana (+1 Cartography).\nYou fling out the cheap vinyl picnic napkin folded at the bottom of the basket \nand lay out each plastic-wrapped item. \nThe sound of your crunching and slurping fills the echoing space.',width/22,height/12)
  
}