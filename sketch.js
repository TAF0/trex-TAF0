
var dog;


function preload(){
    backdrop=loadImage("background.jpg");
    dogimg=loadAnimation("dog1.png","dog2.png","dog3.png");
    foodimg=loadImage("hotdog.png");
}
function setup(){
    
    createCanvas(500,500);
    
    dog=createSprite(200,200,100,100);

    dog.addAnimation("running",dogimg);
    dog.scale=0.5;
    food=createSprite(450,450);
    food.addImage(foodimg);
    food.scale=0.5;

}

function draw(){
    background(backdrop);
    
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
       
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
       dog.x=dog.x + x;

       dog.y=dog.y + y;


}


//Función para leer la posición.
function readposition(data){
    
}