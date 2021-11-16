/*
path = trilha
leftBoundary = limite esquerdo
rightBoundary = limite direito
*/

var path,menino, leftBoundary,rightBoundary;
var pathImg,JaxonImg;

function preload(){
  pathImg = loadImage("trilha.png");
  JaxonImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
  
//Movendo o fundo 
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//criando o menino correndo
Jaxon = createSprite(180,340,30,30);
Jaxon.addAnimation("JakeRunning",meninoImg);
  
//criar o limite esquerdo
leftBoundary=createSprite(0,0,100,800);
  
//*** descomente o código que deixa o limite esquerdo invisível ***
  
//leftBoundary.invisible = false;
//leftBoundary.visible = true;
//leftBoundary.invisible = true;
//leftBoundary.visible = false;

//criar o limite direito 
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  //menino se movendo no eixo X com o mouse
  Jaxon.x = World.mouseX;
  
  Jaxon.collide(limiteEsquerdo);
  Jaxon.collide(limiteDireito);
  
  //*** Descomente o código INDENTADO corretamente ***
  
//   if(path.y > 400 ){
//     path.y = height/2;
//   }
  
//   if(path.y > 400 ){
//   path.y = height/2;
//   }
  
//   if(path.y > 400 ){
// path.y = height/2;}
  
//   if(path.y > 400 ){path.y = height/2;}
  
  
  drawSprites();
}
