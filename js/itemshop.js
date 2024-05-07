var boss;
var font;

function preload(){
font = loadFont('/img/W95FARegular.ttf');
  pic = loadImage('/img/gltizyshop.gif');
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40);
}

function draw() {
  background(0);
  fill(306);
  text('You throw the key to the ground where it shatters. \nThe plume of shard dust grows into an Item Shop.\nThis Shop sells junk from the local pond (wherever local is in the original universe - \nsome Item Shops install planeflipping engines to get more customers, and this is one of them - \na windmill roof, sunbaked clay tiles, blades of grass on the threshold, shedding into the void).\n\nRusty Gear [1 Glitzy]\nSludgy Mask [2 Glitzy]\nFool \'s Harpoon [5 Glitzy]\n\nYou rub your glitzy between your fingers, pondering the choices. \nThe Shop is still warm with the sun of its home plane. \nIt smells like grease and muddy bootprints and meadow breeze. \nSo nice after standing in that cold Void."Can I come back with you?" \nThe Trudgelo nods amiably, and you curl up in a pile of rags in the corner.\nThe Puppelo must sleep here, judging from the fluffy drool smell.\nMaybe it\'s out for a run in the fields...you\'re already imagining what their world is like.\nBy the time the Shop flips back, you\'re already asleep.',width/22,height/12)
  image(pic,width/2.8, height/3.3,450,250);
}