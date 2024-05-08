
var font;
var frog = ["FROGGGGGINNN OUTTTT"];
var frogx = 18;
var frogy = 70;
var Xspeed = 5;
var Yspeed = 20;


function preload(){
font = loadFont('img/W95FARegular.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textSize(40);
}

function draw() {
  background(0);
  fill(306);
  text(frog,frogx,frogy);
  text('\n\n\nYou squish your rubbery green face. Hahaha! Then your froggy vision kicks in \n(all flies + ponds glow with green aura). \nSadly, none of those things live here. Guess it\'s time for a froggy nap...',width/22,height/12);
 
  
  if(mouseIsPressed){
    frogx=frogx+Xspeed
    frogy=frogy-Yspeed
  };
  if (frogy<-200){Yspeed=-15};
  if (frogy>90){Yspeed=15};
  if (frogx>1000){Xspeed=-3};
  if (frogx<-300){Xspeed=3};
}

