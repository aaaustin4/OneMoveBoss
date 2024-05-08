
var font;
let img1, img2, img3, img4;
let index = 0;
//chatgpt

function preload(){
font = loadFont('img/W95FARegular.ttf');
   img1 = loadImage('img/finalbasket.png');
 img2 = loadImage('img/withmushroom.png');
   img3 = loadImage('img/withcupcake.png');
 img4 = loadImage('img/withbanana.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40)
}
function mousePressed() {
index = (index + 1) % 4;
  //chatgpt
}
function draw() {
  background(0);
  fill(306);
  text('This one has an \nIceShroom Broth Potion (75 HP), \na KittenChild Cupcake, \nand a GunMetal Banana (+1 Cartography).\nYou fling out the cheap vinyl picnic napkin folded at the bottom of the basket \nand lay out each plastic-wrapped item. \nThe sound of your crunching and slurping fills the echoing space.',width/22,height/12);
  if (index === 0) {
    image(img1,width*(100/400), height*(200/400))
  } else if (index === 1) {
    image(img2,width*(100/400), height*(200/400))
  } else if (index === 2) {
    image(img3,width*(100/400), height*(200/400))
  } else if (index === 3) {
    image(img4,width*(100/400), height*(200/400))
  } 
 
}


