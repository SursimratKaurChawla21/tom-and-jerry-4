var jerryOne,jerryy;
var garden,gardenImg;
var tomOne,tomTwo,tomThree,tomFour,tom_running,tom_collided,tomLastImg,tom_still;

function preload() {
    //load the images here
    tomLastImg=loadAnimation("images/cat4.png");
    tom_still=loadAnimation("images/cat1.png");
    tom_running=loadAnimation("images/cat2.png", "images/cat3.png","images/cat4.png");
    tom_collided=loadAnimation("images/cat2.png");
    gardenImg=loadImage("images/garden.png");
    jerryOne=loadAnimation("images/mouse1.png");
    jerryTwo = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(600,600);
    tom=createSprite(450,480,20,50);
    tom.addAnimation("collided",tom_still);
    tom.addAnimation("running", tom_running);
    tom.addAnimation("lastImage",tomLastImg);

    tom.scale=0.1;
    
    //create tom and jerry sprites here
    //garden=createSprite(0,300,1200,1200);
    //garden.addImage("garden",gardenImg);

    jerry=createSprite(50,480,20,50);
    jerry.addAnimation("any",jerryOne)

    jerry.scale=0.1;
    jerry.velocityX=0;

    tom.setCollider("circle" , 100,0,40);
    tom.debug = false;

}

function draw() {

    background(gardenImg);
    
    if(jerry.x-tom.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
        tom.changeAnimation("lastImage")
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("running",tom_running);
        tom.changeAnimation("running");
    }
  //For moving and changing animation write code here


}
