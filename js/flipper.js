var pic;
var mouth;
var font;

function preload(){
font = loadFont('/img/W95FARegular.ttf')
  pic = loadImage('/img/scarecrow knigth.png')
  mouth = loadImage('/img/omoisu csatle.png')
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40)
}

function draw() {
  background(0);
  fill(306)
  text('Zuhzuzhzuzuhzap!!\n\nThe Void shifts like a decaying VHS, and you\'re in--a land of empresses, lakes, and ruins.\nThe thing about flipping planes is you don\'t escape the prior circumstance, not exactly. \nEvery object and entity becomes another.\n Every plane is a vast room full of ID numbers linked to plane-specific things. \nA train is a bird is a waterfall.\n\nSo you become a Scarecrow Knight and the Boss becomes a grand and mysterious palace.\n You stand before it. Lingering on the threshold of her dark, cold gate.',width/22,height/12)
  image(pic,width*(100/400), height*(280/400), 300, 300)
  image(mouth,width*(270/400), height*(190/400), 500,500)
}