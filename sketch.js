var w1,w2;
var bird,b2;
var c,c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19;
var d,d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19;
var ob,obImage,ob2,ob2Image;
var d,dImage,over;
var jump,die,bg; 
var obstaclesGroup;
var life = 5;
var p,pi,s,sI;
var si,si2;
var star,stargroup;
var start = 2;
var play = 1;
var gamestate = 2;
var over,overI;
var win,winI;

function preload() {
  obImage = loadImage("k.png");
  ob2Image = loadImage("k1.png");
  dImage = loadImage("d.png");
  jump = loadSound("jump.mp3");
  b2 = loadImage("p.png");
  pi = loadImage("j.png");
  die = loadSound("die.mp3");
  si = loadImage("s.png");
  si2 = loadImage("s2.png");
  sI =loadImage("g.png");
  bg = loadSound("bg.mp3");
  overI = loadImage("gameover.png");
  winI = loadImage("w.png");
}

function setup() {
  createCanvas(800, 800);

  d = createSprite(400,400,800,800);
  d.addImage(dImage);
  d.scale=1.99;

  bird = createSprite(400,200,20,20);
  bird.addImage(b2);
  bird.scale=0.1;
  bird.setCollider("rectangle",0,0,bird.width,bird.height);

  p = createSprite(750,55,30,30);
  p.addImage(pi);
  p.scale = 0.5;

  s = createSprite(50,55,30,30);
  s.addImage(sI);
  s.scale = 0.1;

  over = createSprite(400,400,40,40);
  over.addImage(overI);
  over.scale = 2;

  win = createSprite(400,400,400,400);
  win.addImage(winI);

  w1 = createSprite(5,400,20,800);
  w1.shapeColor = "yellow"
  w2 = createSprite(795,400,20,800);
  w2.shapeColor = "yellow"
  
  c   = createSprite(40,15,25,30);
  c.shapeColor = "yellow";
  c1  = createSprite(80,15,25,30);
  c1.shapeColor = "yellow";
  c2  = createSprite(120,15,25,30);
  c2.shapeColor = "yellow";
  c3  = createSprite(160,15,25,30);
  c3.shapeColor = "yellow";
  c4  = createSprite(200,15,25,30);
  c4.shapeColor = "yellow";
  c5  = createSprite(240,15,25,30);
  c5.shapeColor = "yellow";
  c6  = createSprite(280,15,25,30);
  c6.shapeColor = "yellow";
  c7  = createSprite(320,15,25,30);
  c7.shapeColor = "yellow";
  c8  = createSprite(320,15,25,30);
  c8.shapeColor = "yellow";
  c9  = createSprite(360,15,25,30);
  c9.shapeColor = "yellow";
  c10 = createSprite(400,15,25,30);
  c10.shapeColor = "yellow";
  c11 = createSprite(440,15,25,30);
  c11.shapeColor = "yellow";
  c12 = createSprite(480,15,25,30);
  c12.shapeColor = "yellow";
  c13 = createSprite(520,15,25,30);
  c13.shapeColor = "yellow";
  c14 = createSprite(560,15,25,30);
  c14.shapeColor = "yellow";
  c15 = createSprite(600,15,25,30);
  c15.shapeColor = "yellow";
  c16 = createSprite(640,15,25,30);
  c16.shapeColor = "yellow";
  c17 = createSprite(680,15,25,30);
  c17.shapeColor = "yellow";
  c18 = createSprite(720,15,25,30);
  c18.shapeColor = "yellow";
  c19 = createSprite(760,15,25,30);
  c19.shapeColor = "yellow";
  
  d   = createSprite(40,785,25,30);
  d.shapeColor = "yellow"
  d1  = createSprite(80,785,25,30);
  d1.shapeColor = "yellow"
  d2  = createSprite(120,785,25,30);
  d2.shapeColor = "yellow";
  d3  = createSprite(160,785,25,30);
  d3.shapeColor = "yellow";
  d4  = createSprite(200,785,25,30);
  d4.shapeColor = "yellow";
  d5  = createSprite(240,785,25,30);
  d5.shapeColor = "yellow";
  d6  = createSprite(280,785,25,30);
  d6.shapeColor = "yellow";
  d7  = createSprite(320,785,25,30);
  d7.shapeColor = "yellow";
  d8  = createSprite(320,785,25,30);
  d8.shapeColor = "yellow";
  d9  = createSprite(360,785,25,30);
  d9.shapeColor = "yellow";
  d10 = createSprite(400,785,25,30);
  d10.shapeColor = "yellow";
  d11 = createSprite(440,785,25,30);
  d11.shapeColor = "yellow";
  d12 = createSprite(480,785,25,30);
  d12.shapeColor = "yellow";
  d13 = createSprite(520,785,25,30);
  d13.shapeColor = "yellow";
  d14 = createSprite(560,785,25,30);
  d14.shapeColor = "yellow";
  d15 = createSprite(600,785,25,30);
  d15.shapeColor = "yellow";
  d16 = createSprite(640,785,25,30);
  d16.shapeColor = "yellow";
  d17 = createSprite(680,785,25,30);
  d17.shapeColor = "yellow";
  d18 = createSprite(720,785,25,30);
  d18.shapeColor = "yellow";
  d19 = createSprite(760,785,25,30);
  d19.shapeColor = "yellow";

  obstaclesGroup = createGroup();
  stargroup = createGroup();
 
}

 
function draw() {
  background(280);

  over.visible = false;
  win.visible = false;

  if(gamestate === 2){
    fill("black");
    textSize(40);
     text("PRESS SPACE TO START",150,400);
     textSize(40);
     if(keyCode === 32){
         gamestate = 1;
         bg.play();
  }
  }else if(gamestate===1){
    if(keyIsDown(RIGHT_ARROW)){
       bird.velocityX = 5;
    }
    if(keyIsDown(LEFT_ARROW)){
      bird.velocityX = -5;
    }
    if(keyIsDown(UP_ARROW)){
      bird.velocityY = -5;
    }
    if(keyIsDown(DOWN_ARROW)){
      bird.velocityY = 5;
    }
    if(bird.isTouching(obstaclesGroup)){
       bird.velocityX = 0;
       bird.velocityY = 0;
    }
    if(bird.isTouching(c)||bird.isTouching(c1)||bird.isTouching(c2)||bird.isTouching(c3)||bird.isTouching(c4)||bird.isTouching(c5)||bird.isTouching(c6)||bird.isTouching(c7)||bird.isTouching(c8)||bird.isTouching(c9)||bird.isTouching(c10)||bird.isTouching(c11)||bird.isTouching(c12)||bird.isTouching(c13)||bird.isTouching(c14)||bird.isTouching(c15)||bird.isTouching(c16)||bird.isTouching(c17)||bird.isTouching(c18)||bird.isTouching(c19)||bird.isTouching(d)||bird.isTouching(d1)||bird.isTouching(d2)||bird.isTouching(d3)||bird.isTouching(d4)||bird.isTouching(d5)||bird.isTouching(d6)||bird.isTouching(d7)||bird.isTouching(d8)||bird.isTouching(d9)||bird.isTouching(d10)||bird.isTouching(d11)||bird.isTouching(d12)||bird.isTouching(d13)||bird.isTouching(d14)||bird.isTouching(d15)||bird.isTouching(d16)||bird.isTouching(d17)||bird.isTouching(d18)||bird.isTouching(d19)){
      bird.velocityX = 0;
      bird.velocityY = 0;
      life = life-1;
      bird.x = 400;
      bird.y = 400;
      die.play();
    }
    if(mousePressedOver(p)) {
      obstaclesGroup.destroyEach();
      stargroup.destroyEach();
    }
    if(mousePressedOver(s)) {
     life = 5;
     points();
     Obstacle();
     Obstacle2();
     bird.x = 400;
     bird.y = 400;
     over.visible = false;
    }   
    if(stargroup.isTouching(bird)){
       stargroup.destroyEach();
       life = life+1;
    }
    if(obstaclesGroup.isTouching(bird)){
      obstaclesGroup.destroyEach();
      life = life-1;
   }
   if(life<1){
     over.visible = true;
     bird.x = 3000;
     bird.y = 3000;
     stargroup.destroyEach();
     obstaclesGroup.destroyEach();
     obstaclesGroup.setLifetimeEach(-1);
     stargroup.setLifetimeEach(-1);
     obstaclesGroup.setVelocityXEach(0);
     stargroup.setVelocityXEach(0);    
   }
   if(life>10){
    bird.x = 3000;
    bird.y = 3000;
     win.visible = true;
     stroke("black");
     textSize(80);
     fill("black");
     text("YOU WIN",150,400)
     stargroup.destroyEach();
     obstaclesGroup.destroyEach();
     obstaclesGroup.setLifetimeEach(-1);
     stargroup.setLifetimeEach(-1);
     obstaclesGroup.setVelocityXEach(0);
     stargroup.setVelocityXEach(0);    
   }
      bird.bounceOff(w1);
      bird.bounceOff(w2);
    
      drawSprites();
      stroke("black");
      textSize(20);
      fill("black");
      text("Live's Left: "+ life,600,60);
      Obstacle();
      Obstacle2();
      points();
    
  }
}


function Obstacle() {
  if(frameCount % 80 === 0) {
    ob = createSprite(10,10,20,20);
    ob.y = random(45,720);
    ob.addImage(obImage);
    ob.scale = 0.1;
    ob.velocityX = 4.5;
    ob.lifetime = 200;
    ob.setCollider("rectangle",0,0,650,400);
    obstaclesGroup.add(ob);
  }
   
}
function Obstacle2() {
  if(frameCount % 85 === 0) {
    ob2 = createSprite(800,10,20,20);
    ob2.y = random(45,720);
    ob2.addImage(ob2Image);
    ob2.scale = 0.1;
    ob2.velocityX = -4.5;
    ob2.setCollider("rectangle",0,0,650,400);
    ob2.lifetime = 200;
    obstaclesGroup.add(ob2);
  }
}

function points(){
  position=Math.round(random(1,2));
  if (frameCount%290===0){;
    star = createSprite(800,200,20,20);;
     star.scale=0.16;
      if(position===1){
         star.x=800;
         star.velocityX=-5.5;
         }
      else {
        if (position===2){
          star.x=0;
          star.velocityX=5.5;
        }
      }  
     r = Math.round(random(1,2));
      if (r === 1){
         star.addImage(si);
      } else {
        star.addImage(si2);
      }
    
    star.y=Math.round(random(50,740));
    
    star.setLifetime=100;
    
    stargroup.add(star)  ;
  }
}